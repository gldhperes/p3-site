import Header from '../components/sections/Header.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import Footer from '../components/sections/Footer.jsx';
import WhatsAppButton from '../components/sections/WhatsAppButton.jsx';
import GlobalStyles from '../components/sections/GlobalStyles.jsx';

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <GlobalStyles />
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
}