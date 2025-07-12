import { useState } from 'react';
import type { ReactNode } from 'react';

interface LightboxProps {
  children: ReactNode;
  alt?: string;
}

export function Lightbox({ children, alt }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        onClick={toggleLightbox} 
        className="cursor-pointer transition-transform hover:scale-[1.01] rounded-lg overflow-hidden"
        title="点击放大"
      >
        {children}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={toggleLightbox}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <div className="max-h-[80vh] overflow-auto">
              {children}
            </div>
            {alt && <p className="text-white text-center mt-2">{alt}</p>}
            <button 
              className="absolute top-[-20px] right-[-20px] bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={toggleLightbox}
              aria-label="关闭"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}