"use client";

import { UploadIcon, Trash2Icon } from "lucide-react";
import type { MediaInfo } from "../types";
import { useCallback } from "react";

type SelectedFileProps = {
  file: File;
  onChange: (file: MediaInfo | null) => void;
};

export function SelectedFile({ file, onChange }: SelectedFileProps) {
  const handleRemoveFile = useCallback(() => {
    onChange(null);
  }, [onChange]);

  const fileType = file.type.startsWith("video/") ? "Video" : "Audio";

  return (
    <div className="w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg">
      <div className="flex items-center gap-x-3">
        <div className="size-10 bg-gray-25 rounded-lg flex items-center justify-center">
          <UploadIcon className="size-6 text-blue-hepatica-600" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm leading-4.5 font-medium text-gray-700 tracking-[0.02em]">
            {file.name}
          </h3>
          <span className="text-xs font-normal leading-4 text-gray-100 tracking-[0.02em]">
            {fileType} file uploaded
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleRemoveFile}
        className="size-10 flex items-center justify-center rounded-lg bg-white hover:bg-bright-red-100 transition-colors duration-200"
      >
        <Trash2Icon className="size-4 text-bright-red-600" />
      </button>
    </div>
  );
}
