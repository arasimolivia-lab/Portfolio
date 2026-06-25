import { useState, useEffect } from 'react';
import { Link } from 'wouter';

/**
 * Header Component
 * Sticky navigation with logo and links
 * Bauhaus Maximalist design: minimal, bold, asymmetric
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-[#FF1493] flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Olivia
            </span>
          </a>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8">
          <Link href="/">
            <a className="text-sm font-medium hover:text-[#FF1493] transition-colors">
              Work
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium hover:text-[#FF1493] transition-colors">
              About
            </a>
          </Link>
          <a
            href="#contact"
            className="px-4 py-2 bg-[#FF1493] text-white rounded-lg font-medium text-sm hover:bg-[#E60D7A] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
