import type { MediaInfo } from "./media-uploader";

export const extractMetadata = (file: File): Promise<MediaInfo> => {
        return new Promise<MediaInfo>((resolve) => {
            const url = URL.createObjectURL(file);
            const ext = file.name.split('.').pop()?.toLowerCase() || '';
            const isVideo = file.type.startsWith("video");
            const isAudio = file.type.startsWith("audio");

            const metaBase = { extension: ext, previewUrl: url };

            if (isVideo) {
                const vid = document.createElement("video");
                vid.preload = "metadata";
                vid.src = url;
                vid.onloadedmetadata = () => {
                    const duration = vid.duration;
                    URL.revokeObjectURL(url);
                    resolve({
                        file,
                        meta: { ...metaBase, duration }
                    });
                };
                setTimeout(() => resolve({ file, meta: { ...metaBase, duration: 0 } }), 3000);
            } else if (isAudio) {
                const aud = document.createElement("audio");
                aud.preload = "metadata";
                aud.src = url;
                aud.onloadedmetadata = () => {
                    const duration = aud.duration;
                    URL.revokeObjectURL(url);
                    resolve({
                        file,
                        meta: { ...metaBase, duration }
                    });
                };
                setTimeout(() => resolve({ file, meta: { ...metaBase, duration: 0 } }), 3000);
            } else {
                resolve({
                    file,
                    meta: { ...metaBase, duration: 0 }
                });
            }
        });
    };

    
export const validateFile = (file: File, accepts: string[]) => {
    if (!accepts.includes(file.type)) {
        const ext = file.name.split('.').pop()?.toLowerCase();
        if (["mp3", "wav", "m4a", "aac", "flac", "ogg", "mp4", "mov", "webm", "mkv"].includes(ext || "")) return null;
        return `Invalid file type.`;
    }
    return null;
};