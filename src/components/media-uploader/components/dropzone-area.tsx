"use client";

import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { buildAccept } from "../utils";

import type { MediaInfo } from "../types";
import { getMediaDuration } from "../utils";

type Props = {
  extensions: string[];
  placeholder: string;
  onDropFile: (files: MediaInfo) => void;
};

export function DropzoneArea({ extensions, placeholder, onDropFile }: Props) {
  const accept = useMemo(() => buildAccept(extensions), [extensions]);

  const handleDropFile = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      if (!file) return;

      if (!file.type.startsWith("video/") && !file.type.startsWith("audio/")) {
        return;
      }

      try {
        const duration = await getMediaDuration(file);

        onDropFile({
          file,
          meta: {
            duration,
            type: file.type.startsWith("video/") ? "video" : "audio",
            extension: file.name.split(".").pop() || "",
            previewUrl: URL.createObjectURL(file),
          },
        });
      } catch (err) {
        console.error("Failed to read media duration", err);
      }
    },
    [onDropFile]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop: handleDropFile,
      accept,
      maxFiles: 1,
    });

  const errors = fileRejections.flatMap((rej) =>
    rej.errors.map((e) => {
      if (e.code === "file-invalid-type") {
        return `Invalid file type. Allowed types: ${extensions.join(", ")}`;
      }
      return e.message;
    })
  );

  return (
    <div className="space-y-2 w-full">
      <div
        {...getRootProps()}
        className={cn(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          isDragActive && "border-blue-hepatica-600"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4">
            <UploadIcon className="size-6 text-blue-hepatica-600" />
          </div>
          <p className="mb-2 text-sm text-gray-700 font-medium">
            Click to upload or drag and drop
          </p>
          {!!placeholder && (
            <p className="text-xs text-gray-500 text-center">{placeholder}</p>
          )}
        </div>
      </div>

      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((msg, idx) => (
            <p key={idx} className="text-sm text-bright-red-600">
              {msg}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
