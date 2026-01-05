export type MediaInfo = {
    file: File | null;
    meta: {
        duration: number;
        extension: string;
        previewUrl: string;
        type: "video" | "audio";
    } | null;
};
export type MediaUploaderProps = {
    value: File | null;
    onChange: (value: MediaInfo | null) => void;
    placeholder?: string;
    accepts: string[];
};
//# sourceMappingURL=types.d.ts.map