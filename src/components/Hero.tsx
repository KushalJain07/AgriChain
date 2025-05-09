
import React, { useEffect, useState } from 'react';
import { Factory, Leaf, Store, Truck, Users } from 'lucide-react';

const typingPhrases = [
  "Trace Every Bite Back to Its Roots",
  "Know Your Food's Journey",
  "From Farm to Fork, Transparently",
  "Blockchain-Powered Food Trust"
];

const TYPING_SPEED = 70; // ms per character
const DELETING_SPEED = 40; // ms per character
const DELAY_AFTER_TYPING = 1200; // ms to wait after typing a phrase

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayedText.length === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, DELAY_AFTER_TYPING);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && displayedText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <div className="relative bg-hero-pattern bg-cover bg-center py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-agrichain-green-dark/90 to-agrichain-green/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span>{displayedText}</span>
            <span className="border-r-2 border-white ml-1 animate-pulse" />
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-1">
            Blockchain-based food traceability from farm to fork
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in animate-delay-2">
            <button className="btn-primary bg-white text-agrichain-green hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
            <button className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 transform transition-all duration-300 hover:scale-105">
              Learn How It Works
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animate-delay-3">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
                <Leaf size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Farmer</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
                <Truck size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Transporter</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
                <Factory size={28} className="text-white" />
              </div>
              <p className="text-white font-medium">Processor</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-3 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
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
