export type CropModalProps = {
    imageUrl: string;
    aspect: number;
    rounded: boolean;
    crop: {
        x: number;
        y: number;
    };
    zoom: number;
    onCropChange: (crop: {
        x: number;
        y: number;
    }) => void;
    onZoomChange: (zoom: number) => void;
    onCropComplete: (areaPixels: {
        x: number;
        y: number;
        width: number;
        height: number;
    }) => void;
    onClose: () => void;
    onConfirm: () => void;
};
export declare function CropModal({ imageUrl, aspect, rounded, crop, zoom, onCropChange, onZoomChange, onCropComplete, onClose, onConfirm, }: CropModalProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=crop-modal.d.ts.map