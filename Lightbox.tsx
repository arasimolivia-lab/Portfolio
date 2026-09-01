import { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  image: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
  } | null;
  onClose: () => void;
}

/**
 * Lightbox Component
 * Full-screen image viewer with smooth animations
 * Bauhaus Maximalist: bold close button, high contrast
 */
export default function Lightbox({ isOpen, image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#FFD700] transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X size={32} strokeWidth={3} />
        </button>

        {/* Image Container */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <img
            src={image.thumbnail}
            alt={image.title}
            className="w-full h-auto"
          />

          {/* Image Info */}
          <div className="p-6 bg-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[#FF1493] font-semibold text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {image.category}
                </p>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {image.title}
                </h3>
                <p className="text-gray-600">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
