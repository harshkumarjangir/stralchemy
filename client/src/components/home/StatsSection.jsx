import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, suffix = "", prefix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const duration = 2500; // 2.5 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo function for smooth deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(ease * end);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we hit exactly the end number
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-green-200/20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="bg-white/80 p-8 xl:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-10 h-1 bg-brand-green rounded-full mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
            <h3 className="text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-purple to-purple-500 mb-4 tracking-tighter">
              <CountUp end={177} />
            </h3>
            <h4 className="text-lg xl:text-xl font-bold text-gray-900 mb-3">Brands Transformed</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              From early-stage startups to established Enterprises across 12+ industries
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/80 p-8 xl:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-10 h-1 bg-brand-purple rounded-full mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
            <h3 className="text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-purple to-purple-500 mb-4 tracking-tighter">
              <CountUp end={89} suffix="%" />
            </h3>
            <h4 className="text-lg xl:text-xl font-bold text-gray-900 mb-3">Return for More</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              Nearly 9 out of 10 clients come back for additional strategic projects
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/80 p-8 xl:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-10 h-1 bg-brand-green rounded-full mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
            <h3 className="text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-purple to-purple-500 mb-4 tracking-tighter">
              <CountUp end={3.8} suffix="x" decimals={1} />
            </h3>
            <h4 className="text-lg xl:text-xl font-bold text-gray-900 mb-3">ROI Increase</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              Average Return on Investment increase within 12 months of implementation
            </p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white/80 p-8 xl:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="w-10 h-1 bg-brand-purple rounded-full mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
            <h3 className="text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-purple to-purple-500 mb-4 tracking-tighter">
              <CountUp end={128} suffix="%" />
            </h3>
            <h4 className="text-lg xl:text-xl font-bold text-gray-900 mb-3">Revenue Growth</h4>
            <p className="text-gray-500 leading-relaxed text-sm">
              Average revenue growth for clients who implement our strategies fully
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
