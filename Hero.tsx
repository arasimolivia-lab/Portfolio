/**
 * Hero Section Component
 * Bauhaus Maximalist: asymmetric layout with bold typography and geometric background
 * Features generated hero background image with hot pink, deep purple, and yellow accents
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image - Bauhaus geometric shapes */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663785558840/6KgPbuTvUdYgc5Bwab9zJ2/hero-background-NWRReix54hjwhxqr4bEs5J.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 -z-10 bg-white/40" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6 z-10">
          <div className="space-y-2">
            <p className="text-[#FF1493] font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Creative Illustrator & Designer
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Bold Designs.
              <br />
              <span className="text-[#FF1493]">Playful Motion.</span>
            </h1>
          </div>

          <p className="text-lg text-gray-700 max-w-md leading-relaxed">
            I create stunning website mockups, app designs, and video content that bring creative visions to life. Ready to make an impact after graduation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="px-8 py-3 bg-[#FF1493] text-white font-semibold rounded-lg hover:bg-[#E60D7A] transition-all transform hover:scale-105 active:scale-97"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Explore Work
            </button>
            <button
              className="px-8 py-3 border-2 border-[#2D1B4E] text-[#2D1B4E] font-semibold rounded-lg hover:bg-[#2D1B4E] hover:text-white transition-all"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: Decorative Geometric Shapes */}
        <div className="relative h-96 lg:h-full hidden lg:flex items-center justify-center">
          {/* Floating geometric elements */}
          <div className="absolute w-64 h-64 rounded-full bg-[#2D1B4E] opacity-20 animate-pulse" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute w-48 h-48 bg-[#FFD700] opacity-30 rounded-lg transform rotate-45" style={{ animation: 'float 8s ease-in-out infinite 1s' }} />
          <div className="absolute w-32 h-32 rounded-full bg-[#FF1493] opacity-40" style={{ animation: 'float 7s ease-in-out infinite 2s' }} />
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
