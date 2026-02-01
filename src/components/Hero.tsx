import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Images } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/venue-poster.jpg"
        >
          <source src="/videos/venue-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 text-sm font-medium tracking-[0.3em] uppercase text-gold border border-gold/40 rounded-full backdrop-blur-sm">
            Pokhara's Premier Event Venue
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 max-w-5xl leading-tight"
        >
          Celebrate Life's <br />
          <span className="text-gold italic">Grandest Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
        >
          A classical venue for weddings, receptions, and corporate events
          <br className="hidden md:block" />
          at Bijaypur Road, Pokhara
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-gold transition-all duration-300 hover:scale-105"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Tour
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/60 text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Images className="mr-2 h-5 w-5" />
            View Gallery
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase">Discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-gold/40" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-gold/40" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-gold/40" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-gold/40" />
    </section>
  );
};

export default Hero;
