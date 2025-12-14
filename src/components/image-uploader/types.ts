import type { Area } from "react-easy-crop";

export type ImageItem = {
  id: string;
  originalFile: File;
  originalUrl: string;

  // cropped output
  croppedFile?: File;
  croppedUrl?: string;

  // cropping state
  crop: { x: number; y: number };
  zoom: number;
  croppedAreaPixels?: Area | null;

  // for aspect fallback when aspectRatio is undefined
  naturalAspect?: number;
};
