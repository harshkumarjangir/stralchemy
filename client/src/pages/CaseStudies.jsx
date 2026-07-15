import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Ecommerce & Retail", icon: "🛍️" },
  { name: "Education & EdTech", icon: "🎓" },
  { name: "Fashion & Beauty", icon: "✨" },
  { name: "Finance & FinTech", icon: "📈" },
  { name: "Food & Beverage", icon: "🍽️" },
  { name: "Healthcare & Wellness", icon: "🏥" },
  { name: "Hospitality & Travel", icon: "✈️" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Professional Services", icon: "💼" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Sustainability & Green Tech", icon: "🌱" },
  { name: "Technology & SaaS", icon: "💻" }
];

const generateSlug = (name) => {
  return name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
};

const CaseStudies = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-brand-purple font-bold tracking-[0.2em] uppercase mb-6 text-sm">
            Proven Results
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tighter">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green animate-gradient-x">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped businesses across various sectors transform their market position, scale effectively, and achieve measurable growth through our strategic alchemy.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">Browse by Industry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/case-studies/${generateSlug(cat.name)}`}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-brand-purple/30 transition-all duration-300 cursor-pointer group flex items-center"
            >
              <div className="w-12 h-12 bg-gray-50 text-2xl flex items-center justify-center mr-4 rounded-xl group-hover:bg-purple-50 group-hover:scale-110 transition-all duration-300">
                {cat.icon}
              </div>
              <span className="font-semibold text-gray-800 group-hover:text-brand-purple transition-colors duration-300">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;
