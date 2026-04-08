"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";

import dropzone from "./assets/dropzone.svg";

import { cn } from "../../lib/utils";
import { CropModal } from "./crop-modal";
import { buildAccept } from "./utils/accept";
import { getCroppedImg } from "./utils/image-utils";

export type ImageUploaderProps = {
  value: File | null;
  onChange: (file: File | null) => void;

  aspectRatio: number;
  extensions: string[];
  rounded?: boolean;
  maxSize?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  placeholder?: string;
  className?: string;
};

export function ImageUploader({
  value,
  onChange,
  aspectRatio,
  extensions,
  rounded = false,
  maxSize = 5 * 1024 * 1024,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  placeholder = "Accepted files jpg, png and webp",
  className,
}: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dimensionErrors, setDimensionErrors] = useState<string[]>([]);

  // crop state
  const [isCropping, setIsCropping] = useState(false);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const accept = useMemo(() => buildAccept(extensions), [extensions]);

  // keep preview in sync with external `value`
  useEffect(() => {
    // clear
    if (!value) {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(value);
    // revoke old
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onDrop = useCallback(
    async (accepted: File[]) => {
      const file = accepted[0];
      if (!file) return;

      setDimensionErrors([]);

      const hasDimensionRules = [minWidth, minHeight, maxWidth, maxHeight].some(
        (value) => typeof value === "number",
      );

      if (hasDimensionRules) {
        try {
          const dimensions = await new Promise<{ width: number; height: number }>(
            (resolve, reject) => {
              const imageUrl = URL.createObjectURL(file);
              const image = new Image();

              image.onload = () => {
                const width = image.naturalWidth || image.width;
                const height = image.naturalHeight || image.height;
                URL.revokeObjectURL(imageUrl);
                resolve({ width, height });
              };

              image.onerror = () => {
                URL.revokeObjectURL(imageUrl);
                reject(new Error("Unable to read image dimensions"));
              };

              image.src = imageUrl;
            },
          );

          const dimensionValidationErrors: string[] = [];

          if (typeof minWidth === "number" && dimensions.width < minWidth) {
            dimensionValidationErrors.push(
              `Image width is too small. Minimum width is ${minWidth}px.`,
            );
          }

          if (typeof minHeight === "number" && dimensions.height < minHeight) {
            dimensionValidationErrors.push(
              `Image height is too small. Minimum height is ${minHeight}px.`,
            );
          }

          if (typeof maxWidth === "number" && dimensions.width > maxWidth) {
            dimensionValidationErrors.push(
              `Image width is too large. Maximum width is ${maxWidth}px.`,
            );
          }

          if (typeof maxHeight === "number" && dimensions.height > maxHeight) {
            dimensionValidationErrors.push(
              `Image height is too large. Maximum height is ${maxHeight}px.`,
            );
          }

          if (dimensionValidationErrors.length > 0) {
            setDimensionErrors(dimensionValidationErrors);
            return;
          }
        } catch {
          setDimensionErrors(["Unable to read image dimensions. Please try another image."]);
          return;
        }
      }

      // open crop modal with a temporary source URL
      const url = URL.createObjectURL(file);
      setSourceUrl(url);
      setIsCropping(true);

      // reset crop controls per new selection
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    },
    [maxHeight, maxWidth, minHeight, minWidth],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple: false,
  });

  const errors = [
    ...fileRejections.flatMap((rej) =>
      rej.errors.map((e) => {
        if (e.code === "file-too-large") {
          return `File is too large. Max size is ${(maxSize / 1048576).toFixed(0)}MB`;
        }
        if (e.code === "file-invalid-type") {
          return `Invalid file type. Allowed types: ${extensions.join(", ")}`;
        }
        return e.message;
      }),
    ),
    ...dimensionErrors,
  ];

  const handleCloseCrop = useCallback(() => {
    setIsCropping(false);
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    setSourceUrl(null);
  }, [sourceUrl]);

  const handleConfirmCrop = useCallback(async () => {
    if (!sourceUrl || !croppedAreaPixels) return;

    try {
      const croppedFile = await getCroppedImg(sourceUrl, croppedAreaPixels, {
        fileName: value?.name ?? "image.png",
        fileType: value?.type ?? "image/png",
      });

      // parent owns state
      onChange(croppedFile);

      // close modal + cleanup source url
      setIsCropping(false);
      URL.revokeObjectURL(sourceUrl);
      setSourceUrl(null);
    } catch (err) {
      // keep modal open so user can retry

      console.error("Error cropping image:", err);
    }
  }, [croppedAreaPixels, onChange, sourceUrl, value?.name, value?.type]);

  const handleRemove = useCallback(() => {
    // revoke preview URL (we created it)
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    onChange(null);
  }, [onChange, previewUrl]);

  const previewBoxStyle = rounded
    ? ({ aspectRatio: "1 / 1" } as const)
    : ({ aspectRatio: `${aspectRatio}` } as const);

  return (
    <div className={cn("w-full space-y-2", className)}>
      {!previewUrl ? (
        <div
          {...getRootProps()}
          className={cn(
            "relative flex w-full items-center justify-center",
            "rounded-[0.625rem] border border-gray-50 bg-white",
            "min-h-44",
            "cursor-pointer transition-colors",
            isDragActive && "border-blue-hepatica-600",
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center px-4 text-center gap-y-3">
            <img src={dropzone} alt="" />
            <p className="text-sm font-manrope font-medium text-gray-700">
              Click to upload or drag and drop
            </p>
            {!!placeholder && <p className="text-xs text-gray-500">{placeholder}</p>}
          </div>
        </div>
      ) : (
        <div className="relative w-fit max-h-44">
          {/* Preview frame — mobile friendly, max height 11rem */}
          <div
            className={cn(
              "h-44 overflow-hidden border border-gray-50 bg-white shadow-lg",
              rounded ? "rounded-full" : "rounded-lg",
            )}
            style={previewBoxStyle}
          >
            <img
              src={previewUrl}
              alt="Preview"
              className="object-contain"
              style={{ maxHeight: "11rem" }}
            />
          </div>

          <button
            type="button"
            onClick={handleRemove}
            aria-label="Remove image"
            className={cn(
              "absolute right-1 top-1 inline-flex items-center justify-center",
              "size-10 rounded-full bg-gray-600 text-white border border-white",
              "hover:bg-gray-700 transition-colors",
            )}
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((msg, idx) => (
            <p key={idx} className="text-sm text-bright-red-600">
              {msg}
            </p>
          ))}
        </div>
      )}

      {isCropping && sourceUrl && (
        <CropModal
          imageUrl={sourceUrl}
          aspect={aspectRatio}
          rounded={rounded}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={(areaPixels) => setCroppedAreaPixels(areaPixels)}
          onClose={handleCloseCrop}
          onConfirm={handleConfirmCrop}
        />
      )}
    </div>
  );
}
