import React from 'react';

const OurPhilosophy = () => {
  const principles = [
    {
      title: "Context is Everything",
      desc: "The same strategy that worked for your competitor might fail for you. We start with understanding your unique context before prescribing solutions.",
      icon: "🌍"
    },
    {
      title: "Strategy Must Execute",
      desc: "Beautiful frameworks mean nothing if they can’t be implemented. We design strategies your team can actually execute with the resources you have.",
      icon: "⚡"
    },
    {
      title: "Measure What Matters",
      desc: "Vanity metrics are seductive. We focus on the KPIs that actually correlate with business outcomes and sustainable growth.",
      icon: "📈"
    },
    {
      title: "Iterate Relentlessly",
      desc: "Markets evolve. Customers change. Strategy isn’t a one-time exercise - it’s a continuous process of learning and adapting.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-24 px-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight uppercase mb-4">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-600">Four principles that guide everything we do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-6">{p.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
