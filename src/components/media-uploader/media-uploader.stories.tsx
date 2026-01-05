import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useMemo, useState } from "react";
import { within, userEvent } from "@storybook/test";

import { MediaUploader } from "./media-uploader";
import type { MediaInfo, MediaUploaderProps } from "./types";

/**
 * Generates a small valid WAV file (silence) so getMediaDuration() can read metadata.
 * This makes the story interaction reliable.
 */
function createSilentWavFile({
  seconds = 1,
  sampleRate = 8000,
  channels = 1,
  name = "sample.wav",
}: {
  seconds?: number;
  sampleRate?: number;
  channels?: number;
  name?: string;
}) {
  const numSamples = Math.floor(seconds * sampleRate);
  const bytesPerSample = 2; // PCM 16-bit
  const blockAlign = channels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;

  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // "RIFF"
  view.setUint32(0, 0x52494646, false);
  view.setUint32(4, 36 + dataSize, true);
  // "WAVE"
  view.setUint32(8, 0x57415645, false);
  // "fmt "
  view.setUint32(12, 0x666d7420, false);
  view.setUint32(16, 16, true); // PCM
  view.setUint16(20, 1, true); // AudioFormat PCM
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true); // bits per sample
  // "data"
  view.setUint32(36, 0x64617461, false);
  view.setUint32(40, dataSize, true);

  // PCM data is already 0 => silence
  const blob = new Blob([buffer], { type: "audio/wav" });
  return new File([blob], name, { type: "audio/wav" });
}

function Demo(args: MediaUploaderProps) {
  const [info, setInfo] = useState<MediaInfo | null>(null);

  const handleChange = useCallback(
    (value: MediaInfo | null) => {
      setInfo(value);
      args.onChange?.(value);
    },
    [args]
  );

  const display = useMemo(() => {
    if (!info) return null;

    return {
      fileName: info.file?.name ?? null,
      fileType: info.file?.type ?? null,
      meta: info.meta,
    };
  }, [info]);

  return (
    <div className="w-[600px] p-6 space-y-4 bg-[#EFF1F5]">
      <MediaUploader
        {...args}
        value={info?.file ?? null}
        onChange={handleChange}
      />

      {/* “Visible MediaInfo” output */}
      <div className="bg-white border border-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-gray-700">MediaInfo</p>

          <button
            type="button"
            className="text-sm text-bright-red-600 hover:underline disabled:opacity-50"
            onClick={() => setInfo(null)}
            disabled={!info}
          >
            Clear
          </button>
        </div>

        <pre
          data-testid="media-info"
          className="mt-3 text-xs text-gray-700 whitespace-pre-wrap"
        >
          {JSON.stringify(display, null, 2)}
        </pre>
      </div>
    </div>
  );
}

const meta: Meta<typeof MediaUploader> = {
  title: "Components/MediaUploader",
  component: MediaUploader,
  args: {
    placeholder: "Upload an audio/video file (wav/mp3/mp4).",
    accepts: ["wav", "mp3", "mp4"],
    // onChange is still provided by story wrapper; keep this so the props panel shows it.
    onChange: () => {},
    value: null,
  },
};

export default meta;

type Story = StoryObj<typeof MediaUploader>;

export const Default: Story = {
  render: (args) => <Demo {...args} />,
};

export const UploadAudioWav: Story = {
  render: (args) => <Demo {...args} />,
  args: {
    accepts: ["wav", "mp3"],
    placeholder: "Upload audio (wav/mp3).",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Dropzone renders an <input type="file"> inside. Grab it directly.
    const input = canvasElement.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement | null;

    if (!input) return;

    const file = createSilentWavFile({ seconds: 1, name: "demo.wav" });

    await userEvent.upload(input, file);

    // After upload, MediaInfo should appear
    await canvas.findByTestId("media-info");
  },
};
