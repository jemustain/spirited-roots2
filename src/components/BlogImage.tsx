'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function BlogImage({ 
  src, 
  alt, 
  className = "w-full h-auto rounded-lg shadow-lg",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
}: BlogImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gradient-to-br from-violet-100 to-violet-200 text-violet-600`}
        style={{ aspectRatio: '3 / 2', minHeight: 200 }}
        role="img"
        aria-label={alt}
      >
        <span className="text-center px-6 text-lg font-medium opacity-80">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={className}
      priority={priority}
      sizes={sizes}
      style={{
        objectFit: 'cover',
      }}
      onError={() => setHasError(true)}
    />
  );
}
