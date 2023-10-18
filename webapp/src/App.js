import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/body/features/Features';
import Footer from './components/footer/Footer';
import Integrations from './components/body/horizontal-cards/card-container';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Features />
        <Integrations />
        <Footer />
      </div>
    </>
  );
}

export default App;
