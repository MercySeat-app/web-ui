import { useState, useMemo, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
import { Image, X, Upload } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { getCroppedImg } from "./image-utils";

export interface ImageUploaderProps {
  /**
   * Array of file extensions allowed (e.g., ['jpeg', 'png', 'gif'])
   */
  extensions?: string[];
  /**
   * Whether to show the crop interface after selecting an image
   * @default false
   */
  shouldCrop?: boolean;
  /**
   * The aspect ratio for the crop mask (e.g., 1 for square, 16/9 for landscape)
   */
  aspectRatio?: number;
  /**
   * Allow multiple images to be uploaded
   * @default false
   */
  multiple?: boolean;
  /**
   * Callback function that returns the processed images
   */
  onChange?: (files: File[]) => void;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Maximum file size in bytes
   * @default 5242880 (5MB)
   */
  maxSize?: number;
  /**
   * Placeholder text for the dropzone
   */
  placeholder?: string;
  /**
   * Hint text shown below the placeholder
   */
  hint?: string;
}

interface CroppedImage {
  file: File;
  preview: string;
}

function ImageUploader({
  extensions = ["jpeg", "jpg", "png", "webp", "gif"],
  shouldCrop = false,
  aspectRatio = 1,
  multiple = false,
  onChange,
  className,
  maxSize = 5242880, // 5MB default
  placeholder = "Click to upload or drag and drop",
  hint,
}: ImageUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [croppedImages, setCroppedImages] = useState<CroppedImage[]>([]);
  const [currentCropIndex, setCurrentCropIndex] = useState<number>(0);
  const [isCropping, setIsCropping] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(
    null
  );
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const accept = useMemo(() => {
    const mimeTypes: Record<string, string[]> = {};
    extensions.forEach((ext) => {
      const normalizedExt = ext.toLowerCase().replace(/^\./, "");
      const mimeType = `image/${normalizedExt === "jpg" ? "jpeg" : normalizedExt}`;
      if (!mimeTypes[mimeType]) {
        mimeTypes[mimeType] = [];
      }
      mimeTypes[mimeType].push(`.${normalizedExt}`);
    });
    return mimeTypes;
  }, [extensions]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const newFiles = multiple ? acceptedFiles : [acceptedFiles[0]];
      setFiles(newFiles);

      if (shouldCrop) {
        setIsCropping(true);
        setCurrentCropIndex(0);
      } else {
        // If not cropping, generate previews and call onChange
        const previews = newFiles.map((file) => URL.createObjectURL(file));
        setPreviewUrls(previews);
        onChange?.(newFiles);
      }
    },
    [multiple, shouldCrop, onChange]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept,
      maxSize,
      multiple,
    });

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleCropConfirm = useCallback(async () => {
    if (!croppedAreaPixels || !files[currentCropIndex]) return;

    try {
      const fileUrl = URL.createObjectURL(files[currentCropIndex]);
      const croppedFile = await getCroppedImg(
        fileUrl,
        croppedAreaPixels,
        files[currentCropIndex].name
      );
      const croppedUrl = URL.createObjectURL(croppedFile);

      const newCroppedImage: CroppedImage = {
        file: croppedFile,
        preview: croppedUrl,
      };

      setCroppedImages((prev) => [...prev, newCroppedImage]);

      // If there are more files to crop, move to the next one
      if (currentCropIndex < files.length - 1) {
        setCurrentCropIndex((prev) => prev + 1);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroppedAreaPixels(null);
      } else {
        // All files cropped, finish
        setIsCropping(false);
        const allCroppedFiles = [...croppedImages, newCroppedImage].map(
          (img) => img.file
        );
        const allPreviews = [...croppedImages, newCroppedImage].map(
          (img) => img.preview
        );
        setPreviewUrls(allPreviews);
        onChange?.(allCroppedFiles);
      }

      URL.revokeObjectURL(fileUrl);
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  }, [croppedAreaPixels, currentCropIndex, files, croppedImages, onChange]);

  const handleCropCancel = useCallback(() => {
    setIsCropping(false);
    setFiles([]);
    setCroppedImages([]);
    setCurrentCropIndex(0);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  }, []);

  const handleRemoveImage = useCallback(
    (index: number) => {
      URL.revokeObjectURL(previewUrls[index]);
      const newPreviews = previewUrls.filter((_, i) => i !== index);
      setPreviewUrls(newPreviews);

      if (shouldCrop) {
        const newCroppedImages = croppedImages.filter((_, i) => i !== index);
        setCroppedImages(newCroppedImages);
        onChange?.(newCroppedImages.map((img) => img.file));
      } else {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        onChange?.(newFiles);
      }
    },
    [previewUrls, croppedImages, files, shouldCrop, onChange]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const errors = fileRejections.map((rejection) => {
    return rejection.errors.map((error) => {
      if (error.code === "file-too-large") {
        return `File is too large. Max size is ${(maxSize / 1048576).toFixed(0)}MB`;
      }
      if (error.code === "file-invalid-type") {
        return `Invalid file type. Allowed types: ${extensions.join(", ")}`;
      }
      return error.message;
    });
  });

  if (isCropping && files[currentCropIndex]) {
    const currentFileUrl = URL.createObjectURL(files[currentCropIndex]);

    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative h-[400px] w-full bg-gray-900 rounded-lg overflow-hidden">
          <Cropper
            image={currentFileUrl}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Zoom: {zoom.toFixed(1)}x
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          {multiple && files.length > 1 && (
            <p className="text-sm text-gray-600">
              Cropping image {currentCropIndex + 1} of {files.length}
            </p>
          )}
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="gray-outline"
              onClick={handleCropCancel}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="blue-hepatica-solid"
              onClick={handleCropConfirm}
            >
              {currentCropIndex < files.length - 1 ? "Next" : "Done"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full space-y-4", className)}>
      {previewUrls.length === 0 ? (
        <div
          {...getRootProps()}
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
            isDragActive
              ? "border-blue-hepatica-600 bg-blue-hepatica-50"
              : "border-gray-300 bg-gray-50 hover:bg-gray-100"
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Image className="w-12 h-12 mb-4 text-gray-400" />
            <p className="mb-2 text-sm text-gray-700 font-medium">
              {placeholder}
            </p>
            {hint && <p className="text-xs text-gray-500">{hint}</p>}
            {!hint && (
              <p className="text-xs text-gray-500">
                {extensions.map((ext) => ext.toUpperCase()).join(", ")}
                {maxSize && ` (max ${(maxSize / 1048576).toFixed(0)}MB)`}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div
            className={cn(
              "grid gap-4",
              multiple ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"
            )}
          >
            {previewUrls.map((url, index) => (
              <div
                key={url}
                className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 p-1 bg-bright-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bright-red-700"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          {multiple && (
            <div
              {...getRootProps()}
              className="flex items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input {...getInputProps()} />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Upload className="w-4 h-4" />
                Add more images
              </div>
            </div>
          )}
        </div>
      )}
      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((errorGroup, index) => (
            <div key={index}>
              {errorGroup.map((error, errorIndex) => (
                <p key={errorIndex} className="text-sm text-bright-red-600">
                  {error}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { ImageUploader };

