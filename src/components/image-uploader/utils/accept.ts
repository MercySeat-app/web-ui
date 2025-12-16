export function buildAccept(extensions: string[]) {
  const mimeTypes: Record<string, string[]> = {};

  for (const extRaw of extensions) {
    const ext = extRaw.toLowerCase().replace(/^\./, "");
    const mime = `image/${ext === "jpg" ? "jpeg" : ext}`;

    mimeTypes[mime] ??= [];
    mimeTypes[mime].push(`.${ext}`);
  }

  return mimeTypes;
}
