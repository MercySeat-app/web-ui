"use client";

import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "../../../lib/utils";
import { buildAccept } from "../utils/accept";

import dropzone from "../assets/dropzone.svg";

type Props = {
  extensions: string[];
  maxSize: number;
  multiple: boolean;
  placeholder: string;
  onDropFiles: (files: File[]) => void;
};

export function DropzoneArea({
  extensions,
  maxSize,
  multiple,
  placeholder,
  onDropFiles,
}: Props) {
  const accept = useMemo(() => buildAccept(extensions), [extensions]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop: onDropFiles,
      accept,
      maxSize,
      multiple,
    });

  const errors = fileRejections.flatMap((rej) =>
    rej.errors.map((e) => {
      if (e.code === "file-too-large") {
        return `File is too large. Max size is ${(maxSize / 1048576).toFixed(
          0
        )}MB`;
      }
      if (e.code === "file-invalid-type") {
        return `Invalid file type. Allowed types: ${extensions.join(", ")}`;
      }
      return e.message;
    })
  );

  return (
    <div className="space-y-2">
      <div
        {...getRootProps()}
        className={cn(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          isDragActive && "border-blue-hepatica-600"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <img src={dropzone} alt="" className="w-12 h-12 mb-4 text-gray-400" />
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
