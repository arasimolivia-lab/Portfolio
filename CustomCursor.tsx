import { useEffect, useState } from 'react';

/**
 * Custom Star Cursor Component
 * Displays a playful hot-pink star that follows the mouse
 * Reinforces the Bauhaus Maximalist design aesthetic
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
        a, button, [role="button"], input, textarea, select {
          cursor: none;
        }
      `}</style>

      {/* Custom star cursor */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Star shape in hot pink */}
            <path
              d="M12 2L15.09 10.26H23.77L17.13 15.02L20.16 23.28L12 18.5L3.84 23.28L6.87 15.02L0.23 10.26H8.91L12 2Z"
              fill="#FF1493"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              }}
            />
          </svg>
        </div>
      )}
    </>
  );
}
