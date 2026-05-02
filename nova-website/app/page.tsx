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
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="work">
        <OurWorkSection />
      </section>
      <section id="contact">
        <FooterSection />
      </section>
    </main>
  );
}
