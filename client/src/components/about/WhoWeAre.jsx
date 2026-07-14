import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-24 px-8 bg-white border-b border-gray-100 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 tracking-tight uppercase">
          Who We Are
        </h2>
        <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium text-left bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
          <p>
            Stralchemy is a strategic partner that exists at the intersection of insight and action. We’re the team businesses reach out when they need clarity in a noisy market, direction when paths aren’t obvious, and frameworks that actually work in the real world.
          </p>
          <p>
            We’re not an agency. We don’t design logos or run your ads. We are strategists who architect the thinking that makes everything else work. The positioning that makes your brand matter. The roadmap that turns marketing spend into measurable growth.
          </p>
          <p>
            Our clients range from ambitious founders launching their first venture to established enterprises, reimagining their market position. What they all share is a commitment to strategic thinking and a willingness to do the hard work that separates good businesses from great ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
