type CropPixels = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare function getCroppedImg(imageSrc: string, pixelCrop: CropPixels, opts: {
    fileName: string;
    fileType: string;
}): Promise<File>;
export {};
//# sourceMappingURL=image-utils.d.ts.map