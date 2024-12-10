import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedProperties />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;