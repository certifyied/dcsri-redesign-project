import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';
import GalleryGrid from '@/components/ui/GalleryGrid';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { galleryImages } from '@/data/gallery';

const categories = ['All', 'Events', 'Campus', 'Academics', 'Activities', 'Sports', 'Facilities'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="overflow-hidden">
      <PageHero
        title="Gallery"
        subtitle="Explore moments and memories from campus life at DCSRI"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Gallery Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GalleryGrid images={filteredImages} />
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
