import React from 'react';

const PaymentProcessSection = () => {
  const steps = [
    "Once you click Submit, you will be redirected to the payment page with the strategic options you have selected.",
    "An advance payment is required to begin work on your strategy.",
    "After the strategy is completed, you will receive an email confirmation notifying you that your strategy is ready.",
    "Log in to your account to complete the remaining balance payment and download your finalized strategy.",
    "The strategy document will be accessible directly from your account dashboard.",
    "Please ensure that the details you provided are accurate, as the payment window expires within 48 hours of strategy completion."
  ];

  return (
    <section className="py-24 px-8 bg-gray-50 border-t border-gray-100 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-brand-purple mb-6 shadow-sm">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Payment Process
            </h2>
            <p className="mt-4 text-gray-500 text-lg">What to expect after you seal the deal</p>
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-brand-purple/70 group-hover:text-brand-purple transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcessSection;
