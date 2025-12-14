import { useCallback, useEffect, useMemo, useState } from "react";
import type { Area } from "react-easy-crop";
import { getCroppedImg } from "./image-utils";
import { makeObjectUrl, revokeObjectUrl } from "./utils/object-url";
import { getNaturalAspectFromUrl } from "./utils/image";
import type { ImageItem } from "./types";

function uid() {
  return crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
}

type Params = {
  multiple: boolean;
  aspectRatio?: number;
  onChange?: (files: File[]) => void;
};

export function useImageUploader({ multiple, aspectRatio, onChange }: Params) {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = useMemo(
    () => items.find((i) => i.id === activeId) ?? null,
    [items, activeId]
  );

  const previews = useMemo(() => {
    // show cropped previews if present, otherwise original
    return items.map((i) => i.croppedUrl ?? i.originalUrl);
  }, [items]);

  const emitChange = useCallback(
    (next: ImageItem[]) => {
      const files = next.map((i) => i.croppedFile ?? i.originalFile);
      onChange?.(files);
    },
    [onChange]
  );

  const addFiles = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const newFiles = multiple ? acceptedFiles : [acceptedFiles[0]];

      const newItems: ImageItem[] = [];
      for (const file of newFiles) {
        const originalUrl = makeObjectUrl(file);
        const id = uid();

        // If aspectRatio is NOT provided, we fallback to the image natural aspect ratio.
        // This is the best you can do with react-easy-crop without switching libs.
        let naturalAspect: number | undefined;
        if (aspectRatio == null) {
          try {
            naturalAspect = await getNaturalAspectFromUrl(originalUrl);
          } catch {
            naturalAspect = undefined;
          }
        }

        newItems.push({
          id,
          originalFile: file,
          originalUrl,
          crop: { x: 0, y: 0 },
          zoom: 1,
          croppedAreaPixels: null,
          naturalAspect,
        });
      }

      setItems((prev) => {
        const next = multiple ? [...prev, ...newItems] : newItems;
        // open crop modal for the first new item
        setActiveId(next[0]?.id ?? null);
        return next;
      });
    },
    [multiple, aspectRatio]
  );

  const setCrop = useCallback((id: string, crop: { x: number; y: number }) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, crop } : i)));
  }, []);

  const setZoom = useCallback((id: string, zoom: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, zoom } : i)));
  }, []);

  const setCroppedArea = useCallback((id: string, area: Area) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, croppedAreaPixels: area } : i))
    );
  }, []);

  const confirmCrop = useCallback(async () => {
    if (!activeItem?.croppedAreaPixels) return;

    const { id, originalFile, originalUrl, croppedAreaPixels } = activeItem;

    const croppedFile = await getCroppedImg(
      originalUrl,
      croppedAreaPixels,
      originalFile.name
    );

    const croppedUrl = makeObjectUrl(croppedFile);

    setItems((prev) => {
      // revoke previous cropped url for this item if any
      const current = prev.find((p) => p.id === id);
      if (current?.croppedUrl) revokeObjectUrl(current.croppedUrl);

      const next = prev.map((i) =>
        i.id === id ? { ...i, croppedFile, croppedUrl } : i
      );

      emitChange(next);

      return next;
    });

    // advance to next item needing crop (optional UX)
    setActiveId((curr) => {
      if (!curr) return null;
      const idx = items.findIndex((i) => i.id === curr);
      const next = items[idx + 1]?.id ?? null;
      return next; // if null, modal can close
    });
  }, [activeItem, emitChange, items]);

  const removeAt = useCallback(
    (index: number) => {
      setItems((prev) => {
        const target = prev[index];
        if (!target) return prev;

        revokeObjectUrl(target.originalUrl);
        revokeObjectUrl(target.croppedUrl);

        const next = prev.filter((_, i) => i !== index);
        emitChange(next);

        // if we removed the active item, move active
        if (activeId === target.id) {
          setActiveId(next[0]?.id ?? null);
        }
        return next;
      });
    },
    [activeId, emitChange]
  );

  const reset = useCallback(() => {
    setItems((prev) => {
      prev.forEach((i) => {
        revokeObjectUrl(i.originalUrl);
        revokeObjectUrl(i.croppedUrl);
      });
      return [];
    });
    setActiveId(null);
    onChange?.([]);
  }, [onChange]);

  const openCropFor = useCallback((id: string) => setActiveId(id), []);
  const closeCrop = useCallback(() => setActiveId(null), []);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      items.forEach((i) => {
        revokeObjectUrl(i.originalUrl);
        revokeObjectUrl(i.croppedUrl);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEffectiveAspect = useCallback(
    (item: ImageItem) => {
      // enforced aspect if provided, else fallback to natural aspect, else 1
      return aspectRatio ?? item.naturalAspect ?? 1;
    },
    [aspectRatio]
  );

  return {
    items,
    previews,
    activeId,
    activeItem,
    addFiles,
    removeAt,
    reset,
    openCropFor,
    closeCrop,
    confirmCrop,
    setCrop,
    setZoom,
    setCroppedArea,
    getEffectiveAspect,
  };
}
