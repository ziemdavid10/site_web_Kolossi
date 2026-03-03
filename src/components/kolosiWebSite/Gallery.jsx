import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/imagekolosi/IMG_0727.JPG.jpeg',
    '/imagekolosi/IMG_0730111.JPG.jpeg',
    '/imagekolosi/IMG_7654.JPG.jpeg',
    '/imagekolosi/WhatsApp Image 2026-01-05 at 6.20.45 PM(1).jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.52.50 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.52.52 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.52.59 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.00 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.03 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.05 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.06 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.09 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.10 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.11 PM.jpeg',
    '/imagekolosi/WhatsApp Image 2026-02-09 at 2.53.13 PM.jpeg',
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="px-3 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4" style={{color: '#8a0080'}}>Galerie Kolosi</h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">Découvrez nos moments, nos actions et notre engagement auprès des jeunes atteints de drépanocytose.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
              className="relative h-32 sm:h-40 md:h-48 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={image}
                alt={`Galerie ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-2xl sm:max-w-4xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={28} className="sm:w-8 sm:h-8" />
            </button>

            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="Galerie agrandie"
                className="w-full h-auto max-h-60 sm:max-h-96 object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-1 sm:p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-1 sm:p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6 text-white" />
              </button>

              <div className="text-center text-white text-xs sm:text-sm py-1 sm:py-2 bg-black/50">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
