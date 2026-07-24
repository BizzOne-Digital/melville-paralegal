import React from 'react';
import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/Services/ServicesSection';
import AboutSection from '../components/About/AboutSection';
import ProcessSection from '../components/Process/ProcessSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import CTABanner from '../components/CTA/CTABanner';

export default function Home() {
  return (
    <main style={{ paddingTop: '112px' }}>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}
