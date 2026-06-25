/**
 * Animated Shapes Component
 * Floating geometric elements that add visual interest and movement
 * Bauhaus Maximalist: circles, rectangles, diagonal lines with playful animations
 */
export default function AnimatedShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating Circle 1 - Hot Pink */}
      <div
        className="absolute w-32 h-32 rounded-full bg-[#FF1493] opacity-10"
        style={{
          top: '10%',
          right: '10%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      {/* Floating Circle 2 - Deep Purple */}
      <div
        className="absolute w-48 h-48 rounded-full bg-[#2D1B4E] opacity-5"
        style={{
          bottom: '20%',
          left: '5%',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />

      {/* Floating Rectangle - Bright Yellow */}
      <div
        className="absolute w-40 h-24 bg-[#FFD700] opacity-8 rounded-lg transform rotate-45"
        style={{
          top: '50%',
          left: '15%',
          animation: 'float 9s ease-in-out infinite 1s',
        }}
      />

      {/* Floating Circle 3 - Hot Pink */}
      <div
        className="absolute w-24 h-24 rounded-full bg-[#FF1493] opacity-5"
        style={{
          top: '70%',
          right: '20%',
          animation: 'float 7s ease-in-out infinite 3s',
        }}
      />

      {/* Floating Rectangle - Deep Purple */}
      <div
        className="absolute w-32 h-16 bg-[#2D1B4E] opacity-8 rounded-lg"
        style={{
          bottom: '10%',
          right: '10%',
          animation: 'float 11s ease-in-out infinite 1.5s',
        }}
      />

      {/* Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
