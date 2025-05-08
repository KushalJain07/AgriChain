
import React from 'react';

const TrustedPartners = () => {
  return (
    <div className="bg-agrichain-cream py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wider">Trusted by Industry Leaders</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Partner logo placeholders */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-gray-200 h-8 w-24 md:h-10 md:w-32 rounded-md flex items-center justify-center">
                <div className="text-gray-500 font-medium text-xs">PARTNER {i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
