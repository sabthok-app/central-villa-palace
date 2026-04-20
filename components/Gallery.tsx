"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/images/exterior-day.jpg", alt: "Central Villa exterior by day" },
  { src: "/images/exterior-night.jpg", alt: "Central Villa illuminated at night" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-cream relative overflow-hidden">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            A Glimpse of <span className="text-maroon italic">Central Villa</span>
          </h2>
          <div className="ornament-line w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {images.map((img, index) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setActiveImage(img.src)}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-[320px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 rounded-2xl transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={activeImage}
            alt="Gallery view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
