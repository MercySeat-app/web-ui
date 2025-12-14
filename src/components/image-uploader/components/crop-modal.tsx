"use client";

import { useCallback } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { X } from "lucide-react";

import { Button } from "../../button";
import type { ImageItem } from "../types";

type Props = {
  item: ImageItem;
  aspect: number;
  rounded: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCropChange: (crop: { x: number; y: number }) => void;
  onZoomChange: (zoom: number) => void;
  onCropComplete: (areaPixels: Area) => void;
};

export function CropModal({
  item,
  aspect,
  rounded,
  onClose,
  onConfirm,
  onCropChange,
  onZoomChange,
  onCropComplete,
}: Props) {
  const handleComplete = useCallback(
    (_area: Area, areaPixels: Area) => onCropComplete(areaPixels),
    [onCropComplete]
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Crop image"
    >
      <div
        className="
          w-full sm:max-w-2xl
          bg-white sm:rounded-lg
          max-h-[95dvh] sm:max-h-[90vh]
          flex flex-col overflow-hidden
        "
      >
        {/* Header (sticky) */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Crop image
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-25 transition-colors"
            aria-label="Close crop modal"
          >
            <X className="size-5 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6">
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-900">
            {/* Responsive crop area */}
            <div className="relative h-[60dvh] sm:h-[400px] w-full">
              <Cropper
                image={item.originalUrl}
                crop={item.crop}
                zoom={item.zoom}
                aspect={aspect}
                cropShape={rounded ? "round" : "rect"}
                onCropChange={onCropChange}
                onCropComplete={handleComplete}
                onZoomChange={onZoomChange}
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Zoom: {item.zoom.toFixed(1)}x
            </label>

            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={item.zoom}
              onChange={(e) => onZoomChange(parseFloat(e.target.value))}
              className="w-full cursor-pointer"
              aria-label="Zoom"
            />
          </div>
        </div>

        {/* Footer (sticky) */}
        <div className="sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
            <Button
              type="button"
              variant="blue-hepatica-solid"
              onClick={onConfirm}
              className="w-full sm:w-auto"
            >
              Crop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
