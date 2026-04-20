"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/images/exterior-night.jpg", alt: "Central Villa illuminated at night" },
  { src: "/images/gallery-1.jpg", alt: "Grand neoclassical facade with columns" },
  { src: "/images/gallery-2.jpg", alt: "Entrance portico with decorated mandap" },
  { src: "/images/gallery-3.jpg", alt: "Bougainvillea framing the palace entrance" },
  { src: "/images/gallery-4.jpg", alt: "Pink blossoms in front of the villa" },
  { src: "/images/gallery-5.jpg", alt: "Front elevation with floral pathway" },
  { src: "/images/gallery-6.jpg", alt: "White petunias and chandelier entrance" },
  { src: "/images/exterior-day.jpg", alt: "Central Villa exterior by day" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: Math.min(index, 5) * 0.08 }}
              onClick={() => setActiveImage(img.src)}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1400}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-[260px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
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
          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Gallery view"
              fill
              sizes="100vw"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
