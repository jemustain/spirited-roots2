import Image from 'next/image';

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
    />
  );
}
