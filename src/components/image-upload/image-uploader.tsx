import { useState, useMemo, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
import { X, Upload } from "lucide-react";
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

  const handleReset = useCallback(() => {
    // Revoke all preview URLs to prevent memory leaks
    previewUrls.forEach((url) => URL.revokeObjectURL(url));

    // Clear all state
    setFiles([]);
    setCroppedImages([]);
    setPreviewUrls([]);
    setCurrentCropIndex(0);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    setIsCropping(false);

    // Call onChange with empty array
    onChange?.([]);
  }, [previewUrls, onChange]);

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
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col">
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Crop Image
            </h2>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-auto p-6">
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
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-gray-200 flex gap-2 justify-end">
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
              {currentCropIndex < files.length - 1 ? "Next" : "Crop"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full space-y-4 min-h-38.5", className)}>
      {previewUrls.length === 0 ? (
        <div
          {...getRootProps()}
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-full min-h-38.5 border cursor-pointer transition-colors bg-transparent",
            isDragActive && "border-blue-hepatica-600"
          )}
          style={{ borderColor: "#CAD2E1", borderRadius: "10px" }}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <img src="/img_icon.svg" alt="" className="w-12 h-12 mb-4 text-gray-400" />
            <p className="mb-2 text-sm text-gray-700 font-medium">
              Click to upload or drag and drop
            </p>
            {placeholder && <p className="text-xs text-gray-500 text-center">{placeholder}</p>}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <div
              className={cn(
                "grid gap-4",
                multiple ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"
              )}
            >
              {previewUrls.map((url, index) => (
                <div
                  key={url}
                  className={cn(
                    "relative group",
                    multiple
                      ? "aspect-square rounded-lg overflow-hidden border border-gray-200"
                      : "flex items-center justify-center"
                  )}
                >
                  {multiple ? (
                    <>
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
                    </>
                  ) : (
                    <div className="relative w-full max-w-xs mx-auto">
                      <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white border border-gray-50 shadow-lg">
                        <img
                          src={url}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <button
                          type="button"
                          className="absolute bottom-4 right-4 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center border-white shadow-md hover:bg-gray-400 transition-colors cursor-pointer"
                          aria-label="Change image"
                        >
                          <img src="/camera_icon.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Reset button in top right */}
            <button
              type="button"
              onClick={handleReset}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: "#EFF1F5" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E0E2E8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EFF1F5")}
              aria-label="Reset image selection"
            >
              <X className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
            </button>
          </div>
          {multiple && (
            <div
              {...getRootProps()}
              className="flex items-center justify-center w-full h-20 border cursor-pointer bg-transparent transition-colors"
              style={{ borderColor: "#CAD2E1", borderRadius: "10px" }}
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

