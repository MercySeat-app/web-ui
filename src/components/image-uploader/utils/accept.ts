export function buildAccept(extensions: string[]) {
  const mimeTypes: Record<string, string[]> = {};

  extensions.forEach((ext) => {
    const normalizedExt = ext.toLowerCase().replace(/^\./, "");
    const mimeType =
      `image/${normalizedExt === "jpg" ? "jpeg" : normalizedExt}`;

    mimeTypes[mimeType] ??= [];
    mimeTypes[mimeType].push(`.${normalizedExt}`);
  });

  return mimeTypes;
}
