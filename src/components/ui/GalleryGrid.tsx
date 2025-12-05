import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                <svg className="w-6 h-6 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            {image.category && (
              <span className="absolute bottom-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                {image.category}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrev}
            className="absolute left-4 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] w-full">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center text-primary-foreground/80 mt-4">
              {images[selectedIndex].alt} ({selectedIndex + 1} / {images.length})
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
