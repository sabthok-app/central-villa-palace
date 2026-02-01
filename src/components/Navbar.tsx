import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "The Hall", href: "#hall" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-start">
          <span
            className={`font-display text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-maroon" : "text-white"
            }`}
          >
            Central Villa
          </span>
          <span
            className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
              isScrolled ? "text-gold-dark" : "text-gold"
            }`}
          >
            Party Palace
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+9779800000000"
            className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>+977 98XXXXXXXX</span>
          </a>
          <Button
            className="bg-gold hover:bg-gold-dark text-foreground font-semibold rounded-full px-6"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-lg text-foreground hover:text-gold transition-colors py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-gold hover:bg-gold-dark text-foreground font-semibold rounded-full mt-4">
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
