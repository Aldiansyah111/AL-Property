// File: pages/HomePage.jsx
import HeroSection from "./home/HeroSection.jsx";
import FeatureSection from "../components/home/FeatureSection";
import AboutSection from "../components/home/AboutSection";
import BrandSection from "../components/home/BrandSection";
import ContactSection from "../components/home/ContactSection";
import FAQSection from "../components/home/FAQSection";

export default function HomePage() {
  return (
    <div className="px-6 py-30 space-y-50">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <BrandSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
