"use client";

import { cn } from "../../lib/utils";
import { DropzoneArea } from "./components/dropzone-area";
import { CropModal } from "./components/crop-modal";
import { Previews } from "./components/previews";
import { useImageUploader } from "./use-image-uploader";

export interface ImageUploaderProps {
  extensions?: string[];
  aspectRatio?: number; // if undefined -> uses natural aspect
  rounded?: boolean; // round crop mask + round preview
  multiple?: boolean;
  onChange?: (files: File[]) => void;
  className?: string;
  maxSize?: number;
  placeholder?: string;
}

export function ImageUploader({
  extensions = ["jpeg", "jpg", "png", "webp"],
  aspectRatio,
  rounded = false,
  multiple = false,
  onChange,
  className,
  maxSize = 5 * 1024 * 1024,
  placeholder = "Accepted file extensions: jpeg, jpg, png and webp",
}: ImageUploaderProps) {
  const {
    items,
    previews,
    activeItem,
    addFiles,
    removeAt,
    reset,
    closeCrop,
    confirmCrop,
    setCrop,
    setZoom,
    setCroppedArea,
    getEffectiveAspect,
  } = useImageUploader({ multiple, aspectRatio, onChange });

  // Determine preview aspect:
  // - if rounded -> always 1
  // - else: use provided aspect or (first image natural aspect) fallback
  const previewAspect = rounded
    ? 1
    : aspectRatio ?? items[0]?.naturalAspect ?? undefined;

  return (
    <div className={cn("w-full space-y-4 min-h-38.5", className)}>
      {previews.length === 0 ? (
        <DropzoneArea
          extensions={extensions}
          maxSize={maxSize}
          multiple={multiple}
          placeholder={placeholder}
          onDropFiles={addFiles}
        />
      ) : (
        <Previews
          urls={previews}
          multiple={multiple}
          rounded={rounded}
          aspect={previewAspect}
          onRemove={removeAt}
          onReset={reset}
        />
      )}

      {activeItem && (
        <CropModal
          item={activeItem}
          aspect={getEffectiveAspect(activeItem)}
          rounded={rounded}
          onClose={closeCrop}
          onConfirm={confirmCrop}
          onCropChange={(crop) => setCrop(activeItem.id, crop)}
          onZoomChange={(zoom) => setZoom(activeItem.id, zoom)}
          onCropComplete={(area) => setCroppedArea(activeItem.id, area)}
        />
      )}
    </div>
  );
}
