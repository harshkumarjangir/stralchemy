import React from 'react';

const steps = [
  {
    number: "01",
    title: "Deep Dive Discovery",
    description: "We immerse ourselves in your business, industry and ambitions to uncover hidden opportunities."
  },
  {
    number: "02",
    title: "Strategic Blueprint",
    description: "Custom strategies designed specifically for your goals, market position, and growth trajectory."
  },
  {
    number: "03",
    title: "Precision Execution",
    description: "Implementation roadmaps that turn strategy into action with clear milestones and metrics."
  },
  {
    number: "04",
    title: "Continuous Evolution",
    description: "Ongoing optimization and support to ensure your strategy adapts as your business scales."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <p className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 uppercase">
            The Stralchemy Process
          </h2>
          <p className="text-xl text-gray-600">
            Four Steps to Strategic Transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (visible only on large screens) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-brand-purple/10 via-brand-purple/30 to-brand-purple/10 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
            >
              {/* Massive Background Number */}
              <span className="absolute -bottom-4 -right-4 text-[120px] font-black text-gray-50 opacity-50 group-hover:text-purple-50 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none z-0">
                {step.number}
              </span>
              
              <div className="relative z-10">
                {/* Number Badge */}
                <div className="w-16 h-16 bg-white border-2 border-brand-purple/20 text-brand-purple rounded-full flex items-center justify-center font-extrabold text-2xl mb-8 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple shadow-lg transition-all duration-500">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-purple transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
