import React from 'react';
import Navigation from '../Navigation';
import Hero from '../Hero';



import Footer from '../Footer';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}
