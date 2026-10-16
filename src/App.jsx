import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveRateBar from './components/LiveRateBar';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import VisitingCardShowcase from './components/VisitingCardShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GoldCalculatorModal from './components/GoldCalculatorModal';
import ProductQuickViewModal from './components/ProductQuickViewModal';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  const handleSelectCollection = (categoryId) => {
    setActiveCategoryFilter(categoryId);
    const featuredElem = document.getElementById('featured');
    if (featuredElem) {
      featuredElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream selection:bg-gold-500 selection:text-black">
      
      {/* Navigation Header */}
      <Navbar onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Live Daily Bullion Rates Bar */}
        <LiveRateBar onOpenCalculator={() => setIsCalculatorOpen(true)} />

        {/* 6 Jewellery Collections */}
        <Collections onSelectCategory={handleSelectCollection} />

        {/* Featured Products with Filters & Quick View */}
        <FeaturedProducts
          activeCategoryFilter={activeCategoryFilter}
          setActiveCategoryFilter={setActiveCategoryFilter}
          onQuickView={(product) => setSelectedProduct(product)}
        />

        {/* Original Showroom Card & Heritage Showcase */}
        <VisitingCardShowcase />

        {/* About Siddhi Vinayak Jewellers */}
        <AboutUs />

        {/* Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Contact, Timings, Interactive Form & Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Rate Calculator Modal */}
      <GoldCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
