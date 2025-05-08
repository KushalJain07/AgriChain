
import React from 'react';
import { Factory, Leaf, Scan, Store, Truck, Users } from 'lucide-react';

const Stakeholders = () => {
  const stakeholders = [
    {
      title: 'Farmer',
      description: 'Register crops, document cultivation practices, and initiate the supply chain with blockchain-verified records.',
      icon: <Leaf className="w-10 h-10 text-agrichain-green" />,
      color: 'bg-green-50'
    },
    {
      title: 'Transporter',
      description: 'Track location, temperature, and transit time with IoT devices, ensuring optimal handling conditions.',
      icon: <Truck className="w-10 h-10 text-agrichain-green" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Processor',
      description: 'Document transformation processes, ingredient sources, and compliance with food safety standards.',
      icon: <Factory className="w-10 h-10 text-agrichain-green" />,
      color: 'bg-yellow-50'
    },
    {
      title: 'Retailer',
      description: 'Verify product authenticity, manage inventory, and enable consumer-facing transparency features.',
      icon: <Store className="w-10 h-10 text-agrichain-green" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Consumer',
      description: 'Scan QR codes to access complete product history, nutritional information, and farm-to-fork journey.',
      icon: <Scan className="w-10 h-10 text-agrichain-green" />,
      color: 'bg-red-50'
    },
    {
      title: 'Regulator',
      description: 'Access immutable audit trails for compliance verification, reducing inspection times and improving safety.',
      icon: <Users className="w-10 h-10 text-agrichain-green" />,
      color: 'bg-indigo-50'
    }
  ];

  return (
    <section id="stakeholders" className="section-container">
      <h2 className="section-title">Stakeholder Dashboards</h2>
      <p className="section-subtitle">Specialized interfaces for every participant in the food supply chain</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stakeholders.map((stakeholder, index) => (
          <div 
            key={index} 
            className="card hover:border-agrichain-green transition-all duration-300 h-full flex flex-col transform hover:scale-102 hover:shadow-lg"
          >
            <div className={`${stakeholder.color} p-4 inline-block rounded-lg mb-6 transition-all duration-300 hover:shadow-inner`}>
              {stakeholder.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{stakeholder.title}</h3>
            <p className="text-gray-600 flex-grow">{stakeholder.description}</p>
            <div className="mt-4">
              <button className="text-agrichain-green font-medium hover:text-agrichain-green-dark inline-flex items-center group transition-all duration-300">
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stakeholders;
