
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About AgriChain</h2>
          <p className="text-gray-600 mb-6">
            AgriChain is revolutionizing the food industry by providing unparalleled transparency and traceability in the supply chain. Our blockchain-powered platform connects all stakeholders - from farmers to consumers - creating a trusted ecosystem for food authenticity.
          </p>
          <p className="text-gray-600 mb-6">
            With AgriChain, every step of the journey from farm to fork is documented, verified, and accessible. This ensures food safety, reduces fraud, and builds consumer trust through verifiable origin and handling information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="flex items-center">
              <div className="bg-agrichain-green/10 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="font-medium">100% Transparency</span>
            </div>
            <div className="flex items-center">
              <div className="bg-agrichain-green/10 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <span className="font-medium">Secure & Immutable</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-96 md:h-[500px] animate-fade-in">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agrichain-earth/5 to-agrichain-green/5 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg w-5/6 max-w-md">
                <div className="flex items-center mb-4">
                  <div className="h-2 w-2 rounded-full bg-agrichain-green mr-2"></div>
                  <div className="text-sm text-agrichain-green font-medium">HARVEST</div>
                </div>
                <div className="h-1 w-full bg-gray-100 mb-4">
                  <div className="h-1 bg-agrichain-green" style={{ width: '70%' }}></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Product</p>
                      <p className="font-medium">Organic Tomatoes</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Batch</p>
                      <p className="font-medium">#TOM22845</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Farm Location</p>
                      <p className="font-medium">Riverside Farms</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Harvest Date</p>
                      <p className="font-medium">15 May 2025</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-agrichain-green/10 flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span>Blockchain Verified</span>
                  </div>
                  <div className="text-agrichain-green font-medium">View Details →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
