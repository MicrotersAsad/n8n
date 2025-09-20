import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/services';

interface PricingPageProps {
  onPageChange: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onPageChange }) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect automation package for your business needs. All plans include setup, testing, and documentation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => onPageChange('contact')}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our automation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: 'What is n8n?',
                answer: 'n8n is a powerful workflow automation tool that connects different apps and services. It allows us to create custom automations without the limitations of pre-built solutions.'
              },
              {
                question: 'How long does implementation take?',
                answer: 'Most projects are completed within 1-4 weeks, depending on complexity. We provide timeline estimates during the initial consultation.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! All plans include warranty periods and ongoing support options. We also offer maintenance packages for long-term partnerships.'
              },
              {
                question: 'Can you integrate with my existing tools?',
                answer: 'Absolutely! n8n supports 300+ apps and services, and we can create custom integrations for proprietary systems.'
              },
              {
                question: 'What if I need changes later?',
                answer: 'We offer modification services and can adapt your workflows as your business evolves. Many changes are covered under our warranty periods.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No hidden fees! Our pricing is transparent and includes everything needed to get your automation running.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific automation needs and get a custom quote.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};