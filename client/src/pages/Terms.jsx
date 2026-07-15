import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-8">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 font-medium mb-12">
          Last Updated: January 18, 2026
        </p>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg">
            Welcome to Stralchemy. By accessing our website and using our services, you agree to be bound by these Terms & Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Services Overview</h2>
          <p>Stralchemy provides strategic branding and marketing consulting services, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Brand positioning and identity strategy</li>
            <li>Marketing strategy development</li>
            <li>Strategic roadmaps and implementation playbooks</li>
            <li>Consulting and advisory services</li>
          </ul>
          <p>All deliverables are strategic documents, frameworks, and guidance materials designed to inform your business decisions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Service Packages & Pricing</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2.1 Package Selection</h3>
          <p>We offer three tiers for both Branding and Marketing strategies:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Branding:</strong> Starter (₹8,999), Complete (₹19,999), Enterprise (₹48,999)</li>
            <li><strong>Marketing:</strong> Foundation (₹11,999), Growth (₹24,999), Scale (₹53,999)</li>
            <li><strong>Complete Packages:</strong> Bundled branding and marketing options with discounted pricing</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2.2 Pricing Terms</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>All prices are listed in Indian Rupees (INR)</li>
            <li>Prices are subject to change without notice, but will not affect confirmed orders</li>
            <li>Prices do not include applicable taxes unless specified</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Payment Terms</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3.1 Payment Process</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>An advance payment is required upon order submission to begin work on your strategy</li>
            <li>The remaining balance becomes due upon strategy completion.</li>
            <li>You will receive a notification via email and phone when your strategy is ready</li>
            <li>You can log into your profile on our website to pay the remaining amount</li>
            <li>Once full payment is completed, you can download your customized strategy directly from your profile.</li>
            <li>Access to download your strategy is available only after full payment is received.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3.2 Payment Methods</h3>
          <p>Payments are processed securely through Razorpay. We accept:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Credit/Debit Cards</li>
            <li>Net Banking</li>
            <li>UPI</li>
            <li>Other payment methods supported by Razorpay</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3.3 Payment Failure</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>If the final payment is not completed, access to download your completed strategy will be withheld</li>
            <li>Your strategy will remain available in your profile for 30 days after completion notification</li>
            <li>Stralchemy reserves the right to cancel the project if payment is not received within 30 days of the completion notification</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Delivery & Access</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4.1 Delivery Timeline</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Starter/Foundation strategies:</strong> 2-3 weeks from advance payment</li>
            <li><strong>Complete/Growth strategies:</strong> 5 weeks from advance payment</li>
            <li><strong>Enterprise/Scale strategies:</strong> 8 weeks from advance payment</li>
          </ul>
          <p>Timelines are estimates and may vary based on project complexity and client responsiveness.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4.2 Strategy Delivery</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Completed strategies are made available through your personal profile on our website</li>
            <li>You will receive a notification via email and phone 2 days before your strategy is ready</li>
            <li>Once notified, you can log into your profile to complete payment and download your strategy</li>
            <li>Downloaded strategies are provided in secure, accessible formats</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4.3 Access & Security</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>You are responsible for maintaining the confidentiality of your profile login credentials</li>
            <li>Strategies can be downloaded from your profile after full payment</li>
            <li>You may re-download your strategy from your profile for up to 12 months after payment</li>
            <li>Sharing your login credentials or downloaded strategy documents with unauthorized parties violates these terms</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Client Responsibilities</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5.1 Information Accuracy</h3>
          <p>You agree to provide:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Accurate and complete business information</li>
            <li>Truthful responses to all questionnaire items</li>
            <li>Timely feedback and approvals when requested</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5.2 Collaboration Requirements</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Respond to our inquiries within reasonable timeframes</li>
            <li>Participate in scheduled calls, workshops, or interviews (for Enterprise packages)</li>
            <li>Provide necessary access to relevant business data and materials</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5.3 Delays Due to Client</h3>
          <p>Delivery timelines may be extended if client delays prevent progress. This includes failure to provide requested information, materials, or feedback within 7 business days of request.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6.1 Strategy Ownership</h3>
          <p>Upon full payment, you receive a non-exclusive license to use the strategy documents for your business purposes. However:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Stralchemy retains copyright to methodologies, frameworks, and template structures</li>
            <li>You may not resell, redistribute, or repurpose our strategies for other businesses</li>
            <li>You may not claim authorship of our methodologies or strategic frameworks</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6.2 Client Materials</h3>
          <p>You retain all rights to materials, information, and assets you provide to us. By submitting materials, you grant Stralchemy a limited license to use them solely for developing your strategy.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6.3 Portfolio & Case Studies</h3>
          <p>Unless you explicitly opt out, Stralchemy may:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Reference your business name in our client list</li>
            <li>Use anonymized data from your project in aggregate statistics</li>
            <li>Create case studies with your prior written approval</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Confidentiality</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7.1 Our Commitment</h3>
          <p>Stralchemy agrees to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Keep all client information confidential</li>
            <li>Not disclose proprietary business information to third parties</li>
            <li>Use client data only for the purpose of delivering contracted services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7.2 Exceptions</h3>
          <p>We may disclose information when:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Required by law or legal process</li>
            <li>Necessary to protect our rights or safety</li>
            <li>You provide explicit written consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Refunds & Cancellations</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8.1 Cancellation Policy</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cancellations made within 24 hours of advance payment: Full refund of advance payment</li>
            <li>Cancellations made after work has commenced: Advance payment is non-refundable</li>
            <li>Cancellations after strategy delivery: No refunds</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8.2 Refund Eligibility</h3>
          <p>We offer refunds only if:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We fail to deliver the strategy within 30 days beyond the stated timeline without justified cause</li>
            <li>We materially breach our service commitments</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8.3 Refund Process</h3>
          <p>Approved refunds will be processed within 14 business days to the original payment method.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Warranties & Disclaimers</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9.1 Service Warranty</h3>
          <p>We warrant that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Services will be performed with professional care and expertise</li>
            <li>Strategies will be based on industry best practices and research</li>
            <li>Deliverables will match the package descriptions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9.2 No Guarantee of Results</h3>
          <p>While we provide strategic guidance based on proven methodologies:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We do not guarantee specific business outcomes or financial results</li>
            <li>Implementation success depends on factors beyond our control</li>
            <li>Past performance and case studies do not guarantee future results</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9.3 Disclaimer</h3>
          <p className="uppercase font-bold">
            SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Limitation of Liability</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10.1 Liability Cap</h3>
          <p>Stralchemy's total liability for any claim arising from our services shall not exceed the amount you paid for the specific service package.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10.2 Excluded Damages</h3>
          <p>We shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Lost profits, revenue, or business opportunities</li>
            <li>Data loss or corruption</li>
            <li>Third-party claims</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10.3 Exceptions</h3>
          <p>Nothing in these terms limits liability for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Death or personal injury caused by negligence</li>
            <li>Fraud or fraudulent misrepresentation</li>
            <li>Any liability that cannot be excluded by law</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Modifications to Services</h2>
          <p>Stralchemy reserves the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Modify package offerings and pricing</li>
            <li>Update methodologies and deliverables</li>
            <li>Discontinue services with reasonable notice</li>
          </ul>
          <p>Changes do not affect orders already confirmed and paid.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">12. Termination</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">12.1 Termination by Stralchemy</h3>
          <p>We may terminate services if you:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Breach these Terms & Conditions</li>
            <li>Provide false or misleading information</li>
            <li>Engage in abusive or harassing behavior toward our team</li>
            <li>Fail to make required payments</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">12.2 Effect of Termination</h3>
          <p>Upon termination:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>All outstanding payments become immediately due</li>
            <li>Access to strategies and ongoing consultations will cease</li>
            <li>Confidentiality obligations continue indefinitely</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">13. Dispute Resolution</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">13.1 Governing Law</h3>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Kadapa, Andhra Pradesh.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">13.2 Dispute Process</h3>
          <p>Before initiating legal proceedings, parties agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Notify the other party in writing of the dispute</li>
            <li>Attempt good faith negotiations for 30 days</li>
            <li>Consider mediation if negotiations fail</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">14. General Provisions</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">14.1 Entire Agreement</h3>
          <p>These Terms & Conditions constitute the entire agreement between you and Stralchemy regarding our services.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">14.2 Severability</h3>
          <p>If any provision is found unenforceable, the remaining provisions remain in full effect.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">14.3 Waiver</h3>
          <p>Failure to enforce any provision does not waive our right to enforce it later.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">14.4 Assignment</h3>
          <p>You may not assign your rights or obligations without our written consent. We may assign our rights to any successor or affiliate.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">14.5 Force Majeure</h3>
          <p>Neither party is liable for delays or failures due to circumstances beyond reasonable control, including natural disasters, war, terrorism, or government actions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">15. Contact Information</h2>
          <p>For questions about these Terms & Conditions, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:strategy@stralchemy.com" className="text-brand-purple font-semibold hover:underline">strategy@stralchemy.com</a></p>

          <div className="mt-16 p-8 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm">
            <p className="text-brand-purple font-medium text-lg leading-relaxed text-center">
              By submitting a form or making a payment on our website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
