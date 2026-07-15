import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-8 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-4">
            Why Choose Stralchemy
          </h2>
          <p className="text-xl text-gray-600">
            We’re not your typical consultancy. Here’s why that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Typical Consultancies */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-700 mb-8 border-b border-gray-100 pb-4">Typical Consultancies</h3>
            <ul className="space-y-4">
              {[
                "Generic frameworks applied universally",
                "Theory-heavy, execution light deliverables",
                "One-size-fits-all recommendations",
                "Deliver and disappear model",
                "Junior consultants doing the work",
                "Billable hours over outcomes",
                "Impressive decks, unclear ROI"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <span className="text-red-500 font-bold mr-3 mt-1">✕</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stralchemy */}
          <div className="bg-gray-900 rounded-3xl p-10 border border-gray-800 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Stralchemy Approach</h3>
            <ul className="space-y-4">
              {[
                "Custom strategies built for your context",
                "Actionable roadmaps you can implement",
                "Industry-specific expertise and insights",
                "Partnership throughout implementation",
                "Senior strategists leading every project",
                "Fixed pricing based on value delivered",
                "Measurable outcomes and clear KPIs"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-300 font-medium">
                  <span className="text-brand-green font-bold mr-3 mt-1">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
