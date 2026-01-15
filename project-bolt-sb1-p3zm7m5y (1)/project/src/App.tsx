import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import NewProductsSection from './components/NewProductsSection';
import MomentsSection from './components/MomentsSection';
import DistributorFormSection from './components/DistributorFormSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductsSection />
      <NewProductsSection />
      <MomentsSection />
      <DistributorFormSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;