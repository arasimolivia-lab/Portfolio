import { useState } from 'react';
import Lightbox from './Lightbox';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: 'Website Mockup' | 'App Design' | 'Video Ad' | 'Illustration';
  span?: 'col-span-1' | 'col-span-2' | 'row-span-2';
}

type CategoryFilter = 'All' | 'Website Mockup' | 'App Design' | 'Video Ad' | 'Illustration';

/**
 * Gallery Component
 * Masonry-style grid with irregular item sizes and category filtering
 * Bauhaus Maximalist: asymmetric layout, bold hover effects, playful filters
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  // Sample gallery data - replace with real portfolio items
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'E-Commerce Platform Redesign',
      description: 'Modern e-commerce website mockup with bold color blocking and smooth interactions.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      category: 'Website Mockup',
      span: 'col-span-2',
    },
    {
      id: '2',
      title: 'Mobile App Interface',
      description: 'Sleek mobile app design with intuitive navigation and vibrant color palette.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop',
      category: 'App Design',
    },
    {
      id: '3',
      title: 'Brand Animation',
      description: 'Playful brand animation with geometric shapes and smooth transitions.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      category: 'Video Ad',
    },
    {
      id: '4',
      title: 'Digital Illustration Series',
      description: 'Bold geometric illustrations inspired by Bauhaus design principles.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      category: 'Illustration',
      span: 'row-span-2',
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'Creative portfolio site showcasing design work with interactive elements.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop',
      category: 'Website Mockup',
    },
    {
      id: '6',
      title: 'Product Launch Video',
      description: 'High-energy product launch video with dynamic visuals and music.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      category: 'Video Ad',
      span: 'col-span-2',
    },
    {
      id: '7',
      title: 'SaaS Dashboard Design',
      description: 'Intuitive SaaS dashboard with data visualization and clean UI.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop',
      category: 'App Design',
    },
    {
      id: '8',
      title: 'Social Media Campaign',
      description: 'Vibrant social media video campaign with bold graphics.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      category: 'Video Ad',
    },
    {
      id: '9',
      title: 'Landing Page Design',
      description: 'High-converting landing page with geometric design elements.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      category: 'Website Mockup',
    },
  ];

  // Get unique categories
  const categories: CategoryFilter[] = ['All', 'Website Mockup', 'App Design', 'Video Ad', 'Illustration'];

  // Filter items based on active category
  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsLightboxOpen(true);
  };

  const handleFilterChange = (category: CategoryFilter) => {
    setActiveFilter(category);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container">
          {/* Section Header */}
          <div className="mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Featured Work
            </h2>
            <div className="w-16 h-1 bg-[#FF1493] rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl">
              Explore my latest projects showcasing website mockups, app designs, video content, and digital illustrations.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap gap-3 items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform ${
                  activeFilter === category
                    ? 'bg-[#FF1493] text-white shadow-lg scale-105'
                    : 'bg-white border-2 border-[#FF1493] text-[#FF1493] hover:bg-[#FF1493]/10'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  item.span || 'col-span-1'
                } ${item.span === 'row-span-2' ? 'row-span-2' : ''}`}
                onClick={() => handleImageClick(item)}
              >
                {/* Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-[#FFD700] font-semibold text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.category}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Hover Border Accent */}
                <div className="absolute inset-0 border-4 border-[#FF1493] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        image={selectedImage}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
