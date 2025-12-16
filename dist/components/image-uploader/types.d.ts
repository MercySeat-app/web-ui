import { Area } from 'react-easy-crop';
export type ImageItem = {
    id: string;
    originalFile: File;
    originalUrl: string;
    croppedFile?: File;
    croppedUrl?: string;
    crop: {
        x: number;
        y: number;
    };
    zoom: number;
    croppedAreaPixels?: Area | null;
    naturalAspect?: number;
};
//# sourceMappingURL=types.d.ts.map