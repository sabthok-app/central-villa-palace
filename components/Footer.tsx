"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="bg-maroon text-white" ref={ref}>
      {/* Location Section */}
      <div className="section-padding border-b border-white/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden h-[400px] bg-maroon-light"
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.2!2d83.98!3d28.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEzJzEyLjAiTiA4M8KwNTgnNDguMCJF!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-maroon shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Central Villa Party Palace</h4>
                    <p className="text-sm text-muted-foreground">
                      Chauthe/Bijaypur Road, 2.7km from Pokhara City Center
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-[0.2em] uppercase text-gold bg-gold/20 rounded-full mb-6 w-fit">
                Visit Us
              </span>

              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Let's Create <span className="text-gold italic">Magic</span>{" "}
                Together
              </h2>

              <p className="text-white/70 leading-relaxed mb-8">
                Ready to host your next grand celebration? Our dedicated team is
                here to help you plan every detail of your special day.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Call Us</p>
                    <p className="font-semibold">+977 98XXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email Us</p>
                    <p className="font-semibold">info@centralvilla.com.np</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Office Hours</p>
                    <p className="font-semibold">10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 border-t border-white/10">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-xl font-bold">Central Villa</span>
            <span className="text-xs text-white/50">Party Palace</span>
          </div>

          <p className="text-sm text-white/60 text-center">
            © 2025 Central Villa Party Palace. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
