
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="bg-agrichain-green rounded-full p-1.5 mr-2">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5a5 5 0 1 1-5 5 5 5 0 0 1 5-5z"/>
                  <path d="M12 7v10M7 12h10"/>
                </svg>
              </div>
              <span className="font-bold text-lg text-agrichain-green">AgriChain</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-agrichain-green transition-colors">About</a>
            <a href="#why" className="text-gray-600 hover:text-agrichain-green transition-colors">Why Choose Us</a>
            <a href="#stakeholders" className="text-gray-600 hover:text-agrichain-green transition-colors">Stakeholders</a>
            <a href="#how" className="text-gray-600 hover:text-agrichain-green transition-colors">How It Works</a>
            <a href="#faq" className="text-gray-600 hover:text-agrichain-green transition-colors">FAQs</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-agrichain-green" />
              ) : (
                <Menu className="w-6 h-6 text-agrichain-green" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-agrichain-green transition-colors py-2">About</a>
            <a href="#why" className="block text-gray-600 hover:text-agrichain-green transition-colors py-2">Why Choose Us</a>
            <a href="#stakeholders" className="block text-gray-600 hover:text-agrichain-green transition-colors py-2">Stakeholders</a>
            <a href="#how" className="block text-gray-600 hover:text-agrichain-green transition-colors py-2">How It Works</a>
            <a href="#faq" className="block text-gray-600 hover:text-agrichain-green transition-colors py-2">FAQs</a>
            <a href="#contact" className="block btn-primary text-center mt-4">Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
