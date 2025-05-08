
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AgriChain has transformed how we communicate our organic farming practices to consumers. The trust it's built with our customers is invaluable.",
      name: "Maria Gonzalez",
      title: "Organic Farm Owner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      quote: "As a food safety inspector, AgriChain has reduced our verification time by 70%. The immutable blockchain records make auditing efficient and reliable.",
      name: "Dr. James Wilson",
      title: "Food Safety Regulator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      quote: "Our customers love being able to scan products and see exactly where their food comes from. It's significantly increased trust and loyalty in our store.",
      name: "Sarah Johnson",
      title: "Grocery Chain Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">What Our Users Say</h2>
      <p className="section-subtitle">Don't just take our word for it – hear from stakeholders across the supply chain</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-5xl text-agrichain-green/20 font-serif">"</div>
            <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
            <div className="flex items-center mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
