import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection/WhyUsSection";
import OurWorkSection from "@/components/OurWorkSection/OurWorkSection";
import FooterSection from "@/components/FooterSection/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <OurWorkSection />
      <FooterSection />
    </main>
  );
}
