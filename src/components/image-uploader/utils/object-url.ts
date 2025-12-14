export function makeObjectUrl(file: Blob) {
  return URL.createObjectURL(file);
}

export function revokeObjectUrl(url?: string | null) {
  if (!url) return;
  try {
    URL.revokeObjectURL(url);
  } catch {
    // ignore
  }
}
