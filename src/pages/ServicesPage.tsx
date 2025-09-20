import React from 'react';
import { services } from '../data/services';
import { Users, ShoppingCart, Megaphone, Database, Briefcase, Settings, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange }) => {
  const iconMap: { [key: string]: any } = {
    users: Users,
    'shopping-cart': ShoppingCart,
    megaphone: Megaphone,
    database: Database,
    briefcase: Briefcase,
    settings: Settings
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Automation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating powerful n8n workflows that connect your tools, automate your processes, and transform your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onPageChange('contact')}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to implementation, we ensure your automation success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your current processes and identify automation opportunities'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Custom workflow design tailored to your specific business needs'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build and test your n8n workflows with thorough quality assurance'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Launch your automation with training and ongoing support'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your automation needs and create a custom solution that drives results.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};