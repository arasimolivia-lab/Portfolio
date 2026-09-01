import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import AnimatedShapes from '@/components/AnimatedShapes';

/**
 * Home Page
 * Main portfolio landing page featuring hero section and gallery
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedShapes />
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}
