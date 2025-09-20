import React from 'react';
import { ArrowRight, CheckCircle, Zap, Clock, TrendingUp, Shield } from 'lucide-react';
import { testimonials } from '../data/services';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automate Your Business with
              <span className="text-blue-600"> n8n Workflows</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your manual processes into powerful automated workflows. Save time, reduce errors, and scale your business with custom n8n automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onPageChange('services')}
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Automation Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating powerful n8n workflows that streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Save Time',
                description: 'Reduce manual work by up to 80% with intelligent automation'
              },
              {
                icon: TrendingUp,
                title: 'Boost Productivity',
                description: 'Focus your team on high-value tasks while automation handles the rest'
              },
              {
                icon: Shield,
                title: 'Reduce Errors',
                description: 'Eliminate human errors with consistent, reliable automated processes'
              },
              {
                icon: Zap,
                title: 'Scale Efficiently',
                description: 'Handle increased workload without hiring additional staff'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Automation Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From simple task automation to complex multi-system integrations, we build n8n workflows that transform how you work.
              </p>
              
              <div className="space-y-4">
                {[
                  'Custom workflow design and implementation',
                  'Integration with 300+ apps and services',
                  'Real-time monitoring and error handling',
                  'Scalable solutions that grow with your business',
                  'Comprehensive training and documentation',
                  '24/7 support and maintenance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Ready to Automate?</h3>
                  <p className="text-gray-600 mt-2">Get a free consultation and custom automation plan</p>
                </div>
                <button
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              See how our automation solutions have transformed businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom automation can streamline your operations and accelerate your growth.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center"
          >
            Get Your Free Automation Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};