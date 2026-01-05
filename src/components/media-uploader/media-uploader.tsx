import { useState } from "react";
import { DropzoneArea } from "./components/dropzone-area";
import { SelectedState } from "./components/selected-state";
import { extractMetadata } from "./media-uploader-utils";

export type MediaInfo = {
    file: File | null;
    meta: {
        duration: number;
        extension: string;
        previewUrl: string;
    } | null;
};

export type MediaUploaderProps = {
  value: File | null;
  onChange: (value: MediaInfo) => void;
  placeholder?: string;
  accepts?: string[];
};

const DEFAULT_ACCEPTS = [
  "audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "audio/aac", "audio/flac", "audio/mp4",
  "video/mp4", "video/webm", "video/quicktime", "video/x-quicktime", "video/ogg", "video/x-matroska"
];

export default function MediaUploader({
  value: _value,
  onChange,
  placeholder = "Accepts • MP3, WAV, AAC, FLAC, MP4, MOV, WebM",
  accepts = DEFAULT_ACCEPTS,
}: MediaUploaderProps) {
  const [file, setFile] = useState<File | null>(_value ?? null);
  const [error, setError] = useState<string | null>(null);

  const handleDropFiles = async (dropped: File[]) => {
    setError(null);
    if (!dropped.length) return;
    const f = dropped[0];
    // validateFile logic from ref version
    const { validateFile } = await import("./media-uploader-utils");
    const vErr = validateFile(f, accepts);
    if (vErr) {
      setError(vErr);
      return;
    }
    setFile(f);
    const mediaData = await extractMetadata(f);
    onChange?.(mediaData);
  };

  const handleRemove = () => {
    setFile(null);
    onChange?.({ file: null, meta: null });
  };

  return (
    <div className="w-full min-w-lg p-4 bg-white border border-gray-50 rounded-[0.625rem]">
      {!file ? (
        <DropzoneArea
          accepts={accepts}
          placeholder={placeholder}
          onDropFiles={handleDropFiles}
        />
      ) : (
        <SelectedState files={[file]} onRemove={handleRemove} />
      )}
      {error && (
        <div className="p-2 mt-3 text-sm text-red-600 border border-red-100 rounded bg-red-50">
          {error}
        </div>
      )}
    </div>
  );
}