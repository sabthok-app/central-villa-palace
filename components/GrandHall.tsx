"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lamp, Columns, Crown, Star } from "lucide-react";

const venueExterior = "/images/venue-exterior.jpg";

const hallFeatures = [
  {
    icon: Lamp,
    title: "Crystal Chandeliers",
    description: "Exquisite lighting that creates a magical ambiance",
  },
  {
    icon: Columns,
    title: "Majestic Pillars",
    description: "Classical columns adding grandeur to every angle",
  },
  {
    icon: Crown,
    title: "Elevated Stage",
    description: "Perfectly designed for ceremonies and performances",
  },
  {
    icon: Star,
    title: "Premium Acoustics",
    description: "Crystal clear sound throughout the venue",
  },
];

const GrandHall = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hall" className="relative overflow-hidden">
      {/* Full-width Image Background */}
      <div className="relative h-screen max-h-[800px]">
        <img
          src={venueExterior}
          alt="Central Villa Grand Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/70 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center" ref={ref}>
          <div className="container-wide">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 text-sm font-medium tracking-[0.2em] uppercase text-gold bg-gold/20 rounded-full mb-6"
              >
                The Centerpiece
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6"
              >
                The <span className="text-gold italic">Grand</span> Hall
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                Step into a world where classical architecture meets modern
                luxury. Our Grand Hall features soaring ceilings, ornate pillars,
                and breathtaking chandeliers that transform every event into an
                unforgettable experience.
              </motion.p>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {hallFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                  >
                    <feature.icon className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-xs mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-2 bg-gradient-to-r from-maroon via-gold to-maroon" />
    </section>
  );
};

export default GrandHall;
