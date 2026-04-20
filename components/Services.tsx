"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Briefcase, UtensilsCrossed, Sparkles, Music } from "lucide-react";

const weddingDecor = "/images/wedding-decor.jpg";

const services = [
  {
    icon: Heart,
    title: "Weddings & Receptions",
    description:
      "Create your dream wedding with our stunning classical backdrop. From intimate ceremonies to grand celebrations.",
    color: "from-rose-500/20 to-rose-600/30",
    span: "col-span-2 row-span-2",
    featured: true,
    image: weddingDecor,
  },
  {
    icon: Sparkles,
    title: "Pasni & Bratabandha",
    description: "Honor your traditions in an elegant setting befitting life's sacred milestones.",
    color: "from-gold/20 to-amber-600/30",
    span: "col-span-1 row-span-1",
  },
  {
    icon: Users,
    title: "Engagement Parties",
    description: "Celebrate new beginnings with your loved ones in style.",
    color: "from-pink-500/20 to-pink-600/30",
    span: "col-span-1 row-span-1",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Impress clients and colleagues with a venue that speaks of success and sophistication.",
    color: "from-blue-500/20 to-blue-600/30",
    span: "col-span-1 row-span-2",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering",
    description: "Exquisite cuisine prepared by our expert chefs. Hygienic, delicious, and tailored to your preferences.",
    color: "from-emerald-500/20 to-emerald-600/30",
    span: "col-span-1 row-span-1",
  },
  {
    icon: Music,
    title: "Entertainment Setup",
    description: "State-of-the-art sound and lighting systems for unforgettable performances.",
    color: "from-purple-500/20 to-purple-600/30",
    span: "col-span-1 row-span-1",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-cream relative">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Every Event, <span className="text-maroon italic">Perfectly</span> Hosted
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From traditional ceremonies to modern celebrations, we provide comprehensive event solutions.
          </p>
          <div className="ornament-line w-32 mx-auto mt-6" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[180px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bento-item relative ${
                service.span === "col-span-2 row-span-2"
                  ? "md:col-span-2 md:row-span-2"
                  : service.span === "col-span-1 row-span-2"
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 group-hover:opacity-70 transition-opacity`}
              />

              {/* Featured Image */}
              {service.featured && service.image && (
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <service.icon
                  className={`h-10 w-10 mb-4 ${
                    service.featured ? "text-gold" : "text-gold-dark"
                  } group-hover:scale-110 transition-transform`}
                />
                <h3
                  className={`font-display text-xl md:text-2xl font-semibold mb-2 ${
                    service.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.featured ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
