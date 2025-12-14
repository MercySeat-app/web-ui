export async function getNaturalAspectFromUrl(url: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) {
        reject(new Error("Could not read image dimensions"));
        return;
      }
      resolve(img.naturalWidth / img.naturalHeight);
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = url;
  });
}
