import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtistsSection from "@/components/ArtistsSection";
import VisualsSection from "@/components/VisualsSection";
import MusicSection from "@/components/MusicSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <VisualsSection />
        <MusicSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
