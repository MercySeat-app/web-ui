"use client";

import { X, Upload } from "lucide-react";
import { cn } from "../../../lib/utils";

type Props = {
  urls: string[];
  multiple: boolean;
  rounded: boolean;
  aspect?: number; // if undefined we’ll use square or auto
  onRemove: (index: number) => void;
  onReset: () => void;
  onAddMoreClick?: () => void;
  onChangeImageClick?: () => void;
};

export function Previews({ urls, multiple, rounded, aspect, onRemove }: Props) {
  const previewClass = cn(
    "w-full overflow-hidden bg-white border border-gray-50 shadow-lg",
    rounded ? "rounded-full" : "rounded-lg"
  );

  // keep preview shape consistent
  // - rounded -> square container so circle looks right
  // - aspect provided -> use CSS aspect-ratio
  const ratioStyle = rounded
    ? ({ aspectRatio: "1 / 1" } as const)
    : aspect
    ? ({ aspectRatio: `${aspect}` } as const)
    : undefined;

  return (
    <div className="space-y-4 relative">
      <div
        className={cn(
          "grid gap-4",
          multiple ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"
        )}
      >
        {urls.map((url, index) => (
          <div
            key={`${url}-${index}`}
            className={cn(
              "relative group",
              multiple
                ? "rounded-lg overflow-hidden border border-gray-200"
                : ""
            )}
          >
            {multiple ? (
              <>
                <div className="w-full" style={ratioStyle}>
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="absolute top-2 right-2 p-2 bg-bright-red-600 text-white rounded-full opacity-100 transition-opacity hover:bg-bright-red-700"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="relative w-full max-w-xs mx-auto">
                <div className={previewClass} style={ratioStyle}>
                  <img
                    src={url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="absolute top-2 right-2 p-2 bg-bright-red-600 text-white rounded-full opacity-100 transition-opacity hover:bg-bright-red-700"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {multiple && (
        <div
          className="flex items-center justify-center w-full h-20 border cursor-pointer bg-transparent transition-colors"
          style={{ borderColor: "#CAD2E1", borderRadius: "10px" }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Upload className="w-4 h-4" />
            Add more images
          </div>
        </div>
      )}
    </div>
  );
}
