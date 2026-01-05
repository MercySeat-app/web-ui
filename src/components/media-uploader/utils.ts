export function getMediaDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);

    const media = document.createElement(
      file.type.startsWith("video/") ? "video" : "audio"
    );

    media.preload = "metadata";
    media.src = url;

    media.onloadedmetadata = () => {
      const duration = media.duration;
      URL.revokeObjectURL(url);
      resolve(duration);
    };

    media.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load media metadata"));
    };
  });
}


function getMimeTypeFromExtension(ext: string): string | null {
  // Videos
  if (["mp4", "webm", "ogg", "mov", "m4v"].includes(ext)) {
    return `video/${ext === "mov" ? "quicktime" : ext}`;
  }

  // Audio
  if (["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(ext)) {
    return `audio/${ext === "mp3" ? "mpeg" : ext === "m4a" ? "mp4" : ext}`;
  }

  return null;
}

export function buildAccept(extensions: string[]) {
  const mimeTypes: Record<string, string[]> = {};

  for (const extRaw of extensions) {
    const ext = extRaw.toLowerCase().replace(/^\./, "");

    const mime = getMimeTypeFromExtension(ext);
    if (!mime) continue;

    mimeTypes[mime] ??= [];
    mimeTypes[mime].push(`.${ext}`);
  }

  return mimeTypes;
}
