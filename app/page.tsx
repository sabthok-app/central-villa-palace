import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GrandHall from "@/components/GrandHall";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GrandHall />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
