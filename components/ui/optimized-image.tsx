"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpg",
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
      console.warn(`Image failed to load: ${src}. Using fallback.`);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      unoptimized={props.unoptimized ?? false}
      loading={props.priority ? "eager" : "lazy"}
    />
  );
}
