import React from 'react';

const OurExpertise = () => {
  const expertiseList = [
    "Brand Strategy", "Growth Marketing", "Customer Research", 
    "Business Model Design", "Performance Analytics", "Market Positioning", 
    "Competitive Analysis", "Go-to-Market Planning", "Digital Transformation", 
    "Strategic Messaging"
  ];

  return (
    <section className="py-24 px-8 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-12">
          Our Expertise
        </h2>
        
        <div className="text-lg text-gray-600 mb-16 space-y-6 max-w-3xl mx-auto leading-relaxed">
          <p>
            Our team brings together strategists with backgrounds in brand development, growth marketing, competitive intelligence, and business transformation.
          </p>
          <p>
            We’ve worked across dozens of industries and business models. Expertise isn’t just about experience - it’s about staying current.
          </p>
          <p>
            We’re constantly studying emerging trends, testing new frameworks, and learning from both successes and failures (ours and others’).
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {expertiseList.map((item, i) => (
            <span key={i} className="bg-gray-50 border border-gray-200 text-gray-800 px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-md hover:border-brand-purple hover:text-brand-purple hover:bg-purple-50 transition-all cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
