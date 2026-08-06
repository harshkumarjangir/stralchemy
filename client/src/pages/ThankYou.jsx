import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type')?.toLowerCase() || 'branding';

  const isMarketing = type === 'marketing';

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
      window.fbq('track', 'Lead', { content_name: isMarketing ? 'Marketing Strategy' : 'Branding Strategy' });
    }
  }, [isMarketing]);

  const content = isMarketing
    ? {
        headline: "Let's build your next stage of growth.",
        subhead: 'Thanks for reaching out about marketing with Stralchemy.',
        body: "Your message has landed with us. Your strategy package will be delivered within the timeline outlined in your package. Every strategy we build is custom — no templates, no guesswork — so the more you shared upfront, the sharper it will be.",
        ctaText: 'In the meantime, see how we approach branding strategy →',
        ctaLink: '/branding',
        tag: 'Marketing Strategy Inquiry Received'
      }
    : {
        headline: 'Your brand story starts here.',
        subhead: 'Thanks for reaching out about branding with Stralchemy.',
        body: "We've received your inquiry. Your strategy package will be delivered within the timeline outlined in your package. In the meantime, take a moment to think about what \"market leader\" looks like for you — we'll build from there.",
        ctaText: 'While you wait, explore our approach to strategic marketing →',
        ctaLink: '/marketing',
        tag: 'Branding Strategy Inquiry Received'
      };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[150px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green rounded-full blur-[150px] opacity-10 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-3xl w-full mx-auto relative z-10">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-gray-100">
          
          {/* Header Badge & Check Icon */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-green-100 text-brand-green flex items-center justify-center mb-6 shadow-sm animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <span className="inline-block bg-green-50 text-brand-green font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-green-200">
              Payment Successful • {content.tag}
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
              {content.headline}
            </h1>

            <p className="text-lg md:text-xl font-medium text-brand-purple">
              {content.subhead}
            </p>
          </div>

          {/* Body Paragraph */}
          <div className="bg-purple-50/50 border border-purple-100/80 rounded-2xl p-6 md:p-8 mb-10 text-gray-700 leading-relaxed text-base md:text-lg">
            {content.body}
          </div>

          {/* Next Steps Timeline */}
          <div className="mb-10">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-6">
              Next Steps
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-bold text-gray-900">Your submission has been received</p>
                  <p className="text-xs text-gray-500 mt-0.5">Our strategy team has received your information and order details.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-bold text-gray-900">Your strategy package is being prepared</p>
                  <p className="text-xs text-gray-500 mt-0.5">We are analyzing your inputs to craft a tailored blueprint.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-bold text-gray-900">It will arrive within the timeline outlined in your package</p>
                  <p className="text-xs text-gray-500 mt-0.5">We'll notify you via email/SMS as soon as your strategy playbook is ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-green-400 mb-1">
                Explore More
              </p>
              <p className="font-semibold text-sm md:text-base text-gray-200">
                {content.ctaText}
              </p>
            </div>
            <Link
              to={content.ctaLink}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-bold rounded-xl text-sm hover:bg-gray-100 transition-all flex-shrink-0 shadow-md"
            >
              Stralchemy →
            </Link>
          </div>

          {/* Sign-off & Navigation Actions */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-gray-700 font-medium text-sm">
              <p>Talk soon,</p>
              <p className="font-bold text-gray-900">The Stralchemy Team</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="px-5 py-2.5 bg-purple-50 text-brand-purple font-bold rounded-xl text-sm hover:bg-purple-100 transition-colors"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/"
                className="px-5 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ThankYou;
