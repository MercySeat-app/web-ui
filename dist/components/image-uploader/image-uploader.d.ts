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
export declare function ImageUploader({ value, onChange, aspectRatio, extensions, rounded, maxSize, minWidth, minHeight, maxWidth, maxHeight, placeholder, className, }: ImageUploaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=image-uploader.d.ts.map