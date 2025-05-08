
import React from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! Our team will get back to you shortly.");
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">Have questions or ready to transform your supply chain? Get in touch with our experts.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
        <div className="relative rounded-xl overflow-hidden h-full min-h-[400px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-agrichain-green/80 to-agrichain-green-dark/80 z-10 transition-all duration-500 hover:from-agrichain-green/90 hover:to-agrichain-green-dark/90"></div>
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80" 
            alt="Agricultural field" 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Food Traceability?</h3>
            <p className="mb-6">Join industry leaders who are already using AgriChain to build trust and transparency in their supply chains.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contact@agrichain.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agrichain-green focus:border-agrichain-green transition-all"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  id="role"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agrichain-green focus:border-agrichain-green transition-all"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="farmer">Farmer</option>
                  <option value="processor">Food Processor</option>
                  <option value="distributor">Distributor</option>
                  <option value="retailer">Retailer</option>
                  <option value="regulator">Regulator</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agrichain-green focus:border-agrichain-green transition-all"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agrichain-green focus:border-agrichain-green transition-all"
                placeholder="Tell us about your needs or questions"
                required
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                className="w-4 h-4 text-agrichain-green rounded border-gray-300 focus:ring-agrichain-green"
                required
              />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                I agree to receive communications from AgriChain
              </label>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
