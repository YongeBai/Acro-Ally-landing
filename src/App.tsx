import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css'

const App: React.FC = () => {
  return (
    <div className="dark">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Benefits />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;