import Image from 'next/image';

interface HeroImageProps {
  src?: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayColor?: 'sage' | 'forest' | 'warm' | 'nature' | 'lavender' | 'purple' | 'violet';
}

export default function HeroImage({ 
  src, 
  alt, 
  className = "", 
  overlay = false,
  overlayColor = 'lavender' 
}: HeroImageProps) {
  const overlayClasses = {
    sage: 'bg-gradient-to-r from-sage-800/70 to-sage-600/70',
    forest: 'bg-gradient-to-r from-forest-800/70 to-forest-600/70',
    warm: 'bg-gradient-to-r from-terracotta-800/70 to-gold-600/70',
    nature: 'bg-gradient-to-r from-forest-800/70 via-sage-700/70 to-gold-600/70',
    lavender: 'bg-gradient-to-r from-lavender-800/70 to-lavender-600/70',
    purple: 'bg-gradient-to-r from-plum-800/70 to-plum-600/70',
    violet: 'bg-gradient-to-r from-lavender-800/70 via-plum-700/70 to-marigold-600/70'
  };

  // If no src provided, create a beautiful CSS gradient placeholder
  if (!src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="nature-gradient w-full h-full opacity-80"></div>
        {overlay && (
          <div className={`absolute inset-0 ${overlayClasses[overlayColor]}`}></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        {/* Optional pattern overlay for texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        fill
        sizes="100vw"
        priority
      />
      {overlay && (
        <div className={`absolute inset-0 ${overlayClasses[overlayColor]}`}></div>
      )}
    </div>
  );
}
