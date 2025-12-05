import { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import GalleryGrid from '@/components/ui/GalleryGrid';
import { galleryImages } from '@/data/gallery';

const categories = ['All', 'Events', 'Campus', 'Academics', 'Activities', 'Sports', 'Facilities'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="Explore moments and memories from campus life at DCSRI"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid images={filteredImages} />

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
