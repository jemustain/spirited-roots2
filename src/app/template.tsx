'use client';

import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ease-out ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
