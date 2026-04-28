import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection/WhyUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
    </main>
  );
}
