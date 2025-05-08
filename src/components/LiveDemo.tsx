
import React from 'react';

const LiveDemo = () => {
  return (
    <section className="bg-gradient-to-br from-agrichain-green to-agrichain-green-dark text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See AgriChain in Action</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the power of blockchain-based food traceability with our interactive demo
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-xl border border-white/20 transition-all duration-300 hover:bg-white/15 hover:shadow-2xl">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-800 text-white px-4 py-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm">AgriChain Product Verification</div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 mb-6 transition-all duration-300 hover:bg-gray-200">
                    <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-300">
                      <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="text-center text-gray-500 text-sm">Product Image</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-md">
                    <h4 className="font-medium text-lg mb-3">Organic Tomatoes</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Origin</p>
                        <p className="font-medium">Riverside Farms, California</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Harvest Date</p>
                        <p className="font-medium">May 15, 2025</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Certification</p>
                        <p className="font-medium">USDA Organic</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Batch Number</p>
                        <p className="font-medium">#TOM22845</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Supply Chain Journey</h4>
                  <div className="space-y-4">
                    {[
                      { date: "May 15, 2025", event: "Harvest at Riverside Farms", icon: "🌱" },
                      { date: "May 16, 2025", event: "Quality inspection passed", icon: "✅" },
                      { date: "May 17, 2025", event: "Transport to processing facility", icon: "🚚" },
                      { date: "May 18, 2025", event: "Arrived at FreshFood Processing", icon: "🏭" },
                      { date: "May 20, 2025", event: "Packaging completed", icon: "📦" },
                      { date: "May 21, 2025", event: "Shipped to Nature's Grocery", icon: "🚚" },
                      { date: "May 22, 2025", event: "Available for purchase", icon: "🛒" }
                    ].map((step, index) => (
                      <div key={index} className="flex group">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="bg-agrichain-green text-white w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            {step.icon}
                          </div>
                          {index < 6 && <div className="w-0.5 h-full bg-gray-200 mt-1 group-hover:bg-agrichain-green/30 transition-all duration-300"></div>}
                        </div>
                        <div className="transition-all duration-300 group-hover:translate-x-1">
                          <p className="text-gray-500 text-sm">{step.date}</p>
                          <p className="font-medium">{step.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center transition-all duration-300 hover:bg-green-100 hover:border-green-300">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4 transition-all duration-300 hover:bg-green-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Blockchain Verified</p>
                    <p className="text-green-700 text-sm">This product's journey has been validated on the blockchain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary bg-white text-agrichain-green hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Try the Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
