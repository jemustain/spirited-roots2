export function generatePlaceholderImage(width: number, height: number, text: string = "Violet Mama") {
  // Generate a simple SVG placeholder with your brand colors
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#A855F7;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width, height) / 10}" 
        fill="white" 
        text-anchor="middle" 
        dy=".3em"
        opacity="0.8"
      >
        ${text}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({ 
  width = 1200, 
  height = 800, 
  text = "Violet Mama",
  className = "w-full h-auto rounded-lg shadow-lg"
}: PlaceholderImageProps) {
  const placeholderSrc = generatePlaceholderImage(width, height, text);
  
  return (
    <div className="my-8">
      <img
        src={placeholderSrc}
        alt={text}
        className={className}
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: `${width}/${height}`,
        }}
      />
    </div>
  );
}
