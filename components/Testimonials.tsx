"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Suman & Priya Sharma",
    event: "Wedding Reception",
    text: "Central Villa made our wedding day absolutely magical. The grand hall exceeded all our expectations!",
    rating: 5,
  },
  {
    name: "Rajesh Gurung",
    event: "Corporate Summit",
    text: "Impeccable service and stunning venue. Our international clients were thoroughly impressed.",
    rating: 5,
  },
  {
    name: "Anita Thapa",
    event: "Bratabandha Ceremony",
    text: "A perfect blend of tradition and elegance. The team understood our cultural needs perfectly.",
    rating: 5,
  },
  {
    name: "Kumar & Sita Basnet",
    event: "Golden Anniversary",
    text: "Celebrating 50 years at Central Villa was a dream come true. Absolutely magnificent!",
    rating: 5,
  },
  {
    name: "Dr. Ramesh Pandey",
    event: "Medical Conference",
    text: "World-class facilities in the heart of Pokhara. Highly recommended for any professional event.",
    rating: 5,
  },
  {
    name: "Maya & Bikash Rai",
    event: "Engagement Party",
    text: "From start to finish, every detail was perfect. The decorations were breathtaking!",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="flex-shrink-0 w-[350px] mx-4 p-6 rounded-2xl bg-card shadow-card border border-border/50">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
    <Quote className="h-8 w-8 text-gold/30 mb-3" />
    <p className="text-foreground leading-relaxed mb-4">{testimonial.text}</p>
    <div className="border-t border-border pt-4">
      <p className="font-semibold text-foreground">{testimonial.name}</p>
      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-ivory overflow-hidden" ref={ref}>
      <div className="container-wide mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Cherished <span className="text-maroon italic">Memories</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from the families and organizations who celebrated their
            special moments with us.
          </p>
          <div className="ornament-line w-32 mx-auto mt-6" />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex animate-marquee mb-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex animate-marquee-reverse">
          {[...testimonials.reverse(), ...testimonials].map(
            (testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
