import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users, Camera, Award } from "lucide-react";
import venueExterior from "@/assets/venue-exterior.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Classical Design",
    description: "Neoclassical architecture by Off Grid Architects",
  },
  {
    icon: Users,
    title: "Large Capacity",
    description: "Accommodates grand celebrations with 500+ guests",
  },
  {
    icon: Camera,
    title: "Photogenic Backdrop",
    description: "Every corner designed for perfect memories",
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Dedicated team ensuring flawless events",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-ivory relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4">
            About the Venue
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Where <span className="text-maroon italic">Elegance</span> Meets
            <br />
            Celebration
          </h2>
          <div className="ornament-line w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={venueExterior}
                alt="Central Villa Exterior"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold rounded-br-xl" />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 md:right-8 glass-card rounded-xl p-6 max-w-[200px]"
            >
              <div className="text-4xl font-display font-bold text-maroon">
                2.7
                <span className="text-lg">km</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                from Pokhara city center
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              A Palace for Your <span className="text-gold-dark">Precious</span>{" "}
              Moments
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nestled in the serene Chauthe/Bijaypur area of Pokhara, Central
              Villa stands as a testament to classical grandeur. Designed by the
              visionary team at Off Grid Architects, every pillar, arch, and
              chandelier tells a story of elegance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're planning a traditional Nepali wedding, an intimate
              reception, or a grand corporate event, our venue provides the
              perfect canvas for your celebrations.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-cream hover:bg-gold/10 transition-colors group"
                >
                  <feature.icon className="h-8 w-8 text-gold-dark mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
