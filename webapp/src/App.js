import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Integrations from './components/body/card-container';

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
