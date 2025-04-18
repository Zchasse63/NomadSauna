"use client";

import { useEffect } from "react";

interface PreloadImagesProps {
  images: string[];
}

export function PreloadImages({ images }: PreloadImagesProps) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return null;
}
