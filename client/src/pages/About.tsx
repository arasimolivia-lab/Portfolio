import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedShapes from '@/components/AnimatedShapes';

/**
 * About Page
 * Showcases Olivia's background, skills, and creative approach
 * Bauhaus Maximalist: asymmetric layout with geometric accents
 */
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedShapes />
      <Header />

      {/* Hero Section with Photo */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-3xl">
              <p className="text-[#FF1493] font-semibold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About Me
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Creative Illustrator & Designer
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm Olivia Arasim, a passionate media illustrator and designer graduating soon. I specialize in creating bold, playful designs that bring brands and ideas to life through website mockups, app interfaces, video content, and digital illustrations.
              </p>
            </div>

            {/* Right: Photo Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-[#FF1493]/20 to-[#2D1B4E]/20 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-gray-600 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Your Photo Here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Upload a professional headshot or portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  My Creative Approach
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I believe in combining geometric precision with playful energy. Inspired by Bauhaus principles, I create designs that are both structured and expressive. Every project is an opportunity to push creative boundaries and deliver work that resonates.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What I Do
                </h3>
                <ul className="space-y-3">
                  {['Website & App Mockups', 'Video Ads & Intros', 'Digital Illustrations', 'Brand Design', 'UI/UX Design', 'Motion Graphics'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#FF1493]" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Geometric Graphic */}
            <div className="relative h-96 hidden lg:flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785558840/6KgPbuTvUdYgc5Bwab9zJ2/about-section-graphic-XysKdnCjS8uhKXXybiRDFf.webp"
                alt="About section graphic"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Tools */}
            <div className="p-8 bg-gradient-to-br from-[#FF1493]/10 to-[#FFD700]/10 rounded-lg border-2 border-[#FF1493]/20">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Design Tools
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Figma</li>
                <li>• Adobe Creative Suite</li>
                <li>• Sketch</li>
                <li>• Protopie</li>
              </ul>
            </div>

            {/* Development */}
            <div className="p-8 bg-gradient-to-br from-[#2D1B4E]/10 to-[#FF1493]/10 rounded-lg border-2 border-[#2D1B4E]/20">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• HTML & CSS</li>
                <li>• JavaScript</li>
                <li>• React</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            {/* Video & Motion */}
            <div className="p-8 bg-gradient-to-br from-[#FFD700]/10 to-[#2D1B4E]/10 rounded-lg border-2 border-[#FFD700]/20">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Video & Motion
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• After Effects</li>
                <li>• Premiere Pro</li>
                <li>• Motion Graphics</li>
                <li>• Animation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
