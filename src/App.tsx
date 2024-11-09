import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import PartnerForm from './components/PartnerForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="pt-16">
        <Navigation />
        <Hero />
        <Benefits />
        <Testimonials />
        <Resources />
        <PartnerForm />
      </div>
    </div>
  );
}

export default App;