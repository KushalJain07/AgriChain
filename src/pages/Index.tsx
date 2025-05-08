
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedPartners from '@/components/TrustedPartners';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stakeholders from '@/components/Stakeholders';
import HowItWorks from '@/components/HowItWorks';
import LiveDemo from '@/components/LiveDemo';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TrustedPartners />
      <AboutSection />
      <WhyChooseUs />
      <Stakeholders />
      <HowItWorks />
      <LiveDemo />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
