'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  const toggleBilling = () => {
    setAnnualBilling(!annualBilling);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose the plan that's right for your insurance agency and start connecting with clients more effectively.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-3 mb-8">
              <span className={`text-lg ${!annualBilling ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>Monthly</span>
              <button 
                onClick={toggleBilling}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              >
                <span className="sr-only">Toggle billing frequency</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    annualBilling ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
                <span
                  className={`absolute inset-0 rounded-full ${
                    annualBilling ? 'bg-indigo-600' : 'bg-gray-200'
                  } transition`}
                />
                <span
                  className={`absolute inset-0 flex items-center justify-${
                    annualBilling ? 'end' : 'start'
                  } px-1`}
                >
                  <span className="h-4 w-4 rounded-full bg-white" />
                </span>
              </button>
              <span className={`text-lg ${annualBilling ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Annual
                <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Starter</h3>
                <p className="mt-4 text-3xl font-bold text-gray-900">$49</p>
                <p className="text-gray-500">per month, per line</p>
                <Link 
                  href="/contact" 
                  className="mt-6 block w-full py-3 px-4 rounded-md shadow bg-white text-center text-indigo-600 font-medium border border-indigo-600 hover:bg-gray-50 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
              <div className="px-8 pt-6 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-4">What's included</h4>
                <ul className="space-y-4">
                  {[
                    '1 phone line included',
                    'Up to 500 SMS messages per month',
                    'Basic CRM integration',
                    'Document sharing',
                    'Message templates (5)',
                    '30-day message history',
                    'Email support'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-white border-2 border-indigo-600 rounded-2xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Professional</h3>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  ${annualBilling ? '99' : '119'}
                  <span className="text-base font-normal text-gray-500">/{annualBilling ? 'mo' : 'mo'}</span>
                </p>
                <p className="text-gray-500">
                  {annualBilling ? 'Billed annually ($1,188/year)' : 'Billed monthly'}
                </p>
                <Link 
                  href="/contact" 
                  className="mt-6 block w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-center text-white font-medium hover:bg-indigo-700 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="px-8 pt-6 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-4">What's included</h4>
                <ul className="space-y-4">
                  {[
                    '3 phone lines included',
                    'Up to 3,000 SMS messages per month',
                    'Full CRM/AMS integration',
                    'Unlimited document sharing',
                    'Unlimited message templates',
                    'Team collaboration features',
                    'Message scheduling',
                    'Automated workflows',
                    'Priority support',
                    'Unlimited message history'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
                <p className="mt-4 text-3xl font-bold text-gray-900">Custom</p>
                <p className="text-gray-500">
                  Tailored to your agency's needs
                </p>
                <Link 
                  href="/contact" 
                  className="mt-6 block w-full py-3 px-4 rounded-md shadow bg-white text-center text-indigo-600 font-medium border border-indigo-600 hover:bg-gray-50 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="px-8 pt-6 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-4">What's included</h4>
                <ul className="space-y-4">
                  {[
                    'Everything in Professional, plus:',
                    'Unlimited phone lines',
                    'Unlimited SMS messages',
                    'Custom API development',
                    'White-label options',
                    'Advanced analytics & reporting',
                    'Custom integrations',
                    'Compliance monitoring',
                    'Dedicated account manager',
                    'Custom training & onboarding'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Compare Plans</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-t border-gray-200">
                  <th className="py-5 px-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Features</th>
                  <th className="py-5 px-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">Starter</th>
                  <th className="py-5 px-4 text-center text-sm font-semibold text-indigo-600 border-b border-gray-200">Professional</th>
                  <th className="py-5 px-4 text-center text-sm font-semibold text-gray-900 border-b border-gray-200">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    feature: 'Phone Lines',
                    starter: '1',
                    professional: '3',
                    enterprise: 'Unlimited'
                  },
                  {
                    feature: 'Monthly SMS Messages',
                    starter: '500',
                    professional: '3,000',
                    enterprise: 'Unlimited'
                  },
                  {
                    feature: 'CRM/AMS Integration',
                    starter: 'Basic',
                    professional: 'Full',
                    enterprise: 'Custom'
                  },
                  {
                    feature: 'Message Templates',
                    starter: '5',
                    professional: 'Unlimited',
                    enterprise: 'Unlimited'
                  },
                  {
                    feature: 'Team Collaboration',
                    starter: false,
                    professional: true,
                    enterprise: true
                  },
                  {
                    feature: 'Automated Workflows',
                    starter: false,
                    professional: true,
                    enterprise: 'Advanced'
                  },
                  {
                    feature: 'Message History',
                    starter: '30 days',
                    professional: 'Unlimited',
                    enterprise: 'Unlimited'
                  },
                  {
                    feature: 'Analytics & Reporting',
                    starter: 'Basic',
                    professional: 'Advanced',
                    enterprise: 'Custom'
                  },
                  {
                    feature: 'Support',
                    starter: 'Email',
                    professional: 'Priority',
                    enterprise: 'Dedicated Account Manager'
                  },
                  {
                    feature: 'Custom Branding',
                    starter: false,
                    professional: 'Basic',
                    enterprise: 'White-Label'
                  }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-5 px-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="py-5 px-4 text-sm text-gray-500 text-center">
                      {typeof row.starter === 'boolean' 
                        ? (row.starter 
                          ? <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg> 
                          : <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>)
                        : row.starter}
                    </td>
                    <td className="py-5 px-4 text-sm text-indigo-700 text-center font-medium">
                      {typeof row.professional === 'boolean' 
                        ? (row.professional 
                          ? <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg> 
                          : <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>)
                        : row.professional}
                    </td>
                    <td className="py-5 px-4 text-sm text-gray-500 text-center">
                      {typeof row.enterprise === 'boolean' 
                        ? (row.enterprise 
                          ? <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg> 
                          : <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>)
                        : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-10">
            {[
              {
                question: 'Do I need to purchase a phone number separately?',
                answer: 'No. Each plan includes phone numbers for your agency. The Starter plan includes 1 line, Professional includes 3 lines, and Enterprise offers unlimited lines. Additional lines can be added to any plan for a small monthly fee.'
              },
              {
                question: 'Which CRM/AMS systems does Voley integrate with?',
                answer: 'Voley offers native integrations with AgencyZoom, Hawksoft, and several other industry-standard agency management systems. Our Enterprise plan includes custom integrations for proprietary systems. Contact us to learn about our full range of integrations.'
              },
              {
                question: 'Can I keep my existing business phone number?',
                answer: 'Yes, we support number porting for existing business lines. Our team will help you through the process of transferring your current phone number to the Voley platform.'
              },
              {
                question: 'Is there a limit on the number of users in my agency?',
                answer: 'No, all plans allow unlimited users within your agency. The differences between plans are based on features, phone lines, and message volume, not user count.'
              },
              {
                question: 'How does billing work for additional SMS messages?',
                answer: 'If you exceed your monthly SMS message allocation, additional messages are billed at a competitive per-message rate. Enterprise plans can be customized with unlimited messaging to avoid overage charges.'
              },
              {
                question: 'Is Voley compliant with insurance industry regulations?',
                answer: 'Yes, Voley is built with insurance compliance in mind. We offer features like message archiving, approval workflows, and audit trails to help maintain compliance with industry standards and regulations.'
              }
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your client communications?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our team will help you select the right plan for your agency's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition-all"
            >
              Request a Demo
            </Link>
            <Link 
              href="/features" 
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 