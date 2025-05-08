
import React from 'react';
import { Factory, Leaf, Store, Truck, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-hero-pattern bg-cover bg-center py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-agrichain-green-dark/90 to-agrichain-green/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Trace Every Bite Back to Its Roots
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-1">
            Blockchain-based food traceability from farm to fork
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in animate-delay-2">
            <button className="btn-primary bg-white text-agrichain-green hover:bg-gray-100">
              Get Started
            </button>
            <button className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Learn How It Works
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animate-delay-3">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3">
                <Leaf size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Farmer</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3">
                <Truck size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Transporter</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3">
                <Factory size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Processor</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3">
                <Store size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Retailer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
