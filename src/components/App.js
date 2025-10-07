import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import ContactInfo from './ContactInfo';
import Footer from './Footer';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
export default App;