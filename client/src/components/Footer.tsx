import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

/**
 * Footer Component
 * Contact section with social media links
 * Bauhaus Maximalist: bold colors, clear hierarchy
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:olivia@example.com', label: 'Email', color: '#FF1493' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#2D1B4E' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: '#FF1493' },
  ];

  return (
    <footer className="bg-[#2D1B4E] text-white py-16">
      <div className="container">
        {/* Contact Section */}
        <div className="mb-12 pb-12 border-b border-white/20">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's Create Together
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mb-8">
            Have a project in mind? I'd love to hear about it. Reach out and let's bring your vision to life.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:olivia@example.com"
            className="inline-block px-8 py-3 bg-[#FF1493] text-white font-semibold rounded-lg hover:bg-[#E60D7A] transition-all transform hover:scale-105 active:scale-97"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label={link.label}
                  >
                    <Icon size={24} color={link.color} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#FFD700] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#FFD700] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFD700] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>
            © {currentYear} Olivia Arasim. All rights reserved.
          </p>
          <p>
            Designed & built with creativity and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
