
import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Blockchain-Verified Origin',
      description: 'Every product tracked with immutable blockchain records ensuring authentic source information.',
      icon: (
        <svg className="w-10 h-10 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    {
      title: 'QR Code-Based Consumer Transparency',
      description: 'Scan QR codes to instantly access complete product history and journey information.',
      icon: (
        <svg className="w-10 h-10 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
        </svg>
      )
    },
    {
      title: 'Smart Contract Compliance',
      description: 'Automated compliance verification with predefined quality and handling parameters.',
      icon: (
        <svg className="w-10 h-10 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-6-8h6m-3-4v18m6-13l-6-6-6 6"></path>
        </svg>
      )
    },
    {
      title: 'Real-Time Audit Trails',
      description: 'Comprehensive audit trails for regulators and stakeholders with real-time monitoring.',
      icon: (
        <svg className="w-10 h-10 text-agrichain-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="why" className="bg-agrichain-cream py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose AgriChain?</h2>
        <p className="section-subtitle">Our platform offers unmatched capabilities to ensure food safety, authenticity and transparency</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-white h-full flex flex-col transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <div className="bg-agrichain-green/5 p-4 inline-block rounded-lg mb-6 transition-all duration-300 hover:bg-agrichain-green/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
