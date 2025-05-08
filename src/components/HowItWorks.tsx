
import React from 'react';
import { ArrowRight, Factory, Leaf, Scan, Store, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Harvest',
      description: 'Farmers record crop details and initial data',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Transport',
      description: 'Logistics partners track movement and conditions',
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Process',
      description: 'Production facilities document transformation',
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Retail',
      description: 'Stores verify authenticity and present to consumers',
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: 'Scan',
      description: 'Consumers access complete product journey',
    },
  ];

  return (
    <section id="how" className="section-container bg-gradient-to-b from-white to-agrichain-cream">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">Our simple 5-step process ensures complete transparency from farm to fork</p>
      
      <div className="relative mt-16">
        {/* Flow steps for large screens */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="bg-agrichain-green text-white rounded-full p-4 mb-4 relative z-10">
                  {step.icon}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-full flex items-center justify-center">
                      <ArrowRight className="text-agrichain-green" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
        
        {/* Flow steps for mobile screens */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-agrichain-green text-white rounded-full p-3 mr-4">
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="ml-4 my-4 transform rotate-90 inline-block">
                    <ArrowRight className="text-agrichain-green" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <button className="btn-primary">Watch Demo Video</button>
      </div>
    </section>
  );
};

export default HowItWorks;
