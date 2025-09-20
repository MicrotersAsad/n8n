import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About AutoFlow Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping businesses unlock their potential through intelligent automation and streamlined workflows.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every business, regardless of size, should have access to powerful automation tools that can transform their operations. That's why we specialize in n8n - a flexible, powerful platform that allows us to create custom solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is simple: to help you work smarter, not harder, by automating repetitive tasks so you can focus on what truly matters - growing your business.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, label: 'Happy Clients', value: '200+' },
                  { icon: Award, label: 'Projects Completed', value: '500+' },
                  { icon: Clock, label: 'Hours Saved', value: '10,000+' },
                  { icon: Target, label: 'Success Rate', value: '98%' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
              We're not just developers - we're automation specialists who understand business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep n8n Expertise',
                description: 'We\'ve mastered n8n\'s capabilities and limitations, allowing us to build robust, scalable automation solutions that actually work in real-world scenarios.',
                icon: '🎯'
              },
              {
                title: 'Business-First Approach',
                description: 'We don\'t just build workflows - we solve business problems. Every automation we create is designed to deliver measurable ROI and operational improvements.',
                icon: '💼'
              },
              {
                title: 'End-to-End Service',
                description: 'From initial consultation to ongoing maintenance, we handle every aspect of your automation journey so you can focus on running your business.',
                icon: '🔧'
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-blue-100">
              How we ensure your automation project succeeds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Understanding Your Business',
                description: 'Before writing a single line of code, we dive deep into understanding your processes, pain points, and goals.'
              },
              {
                title: 'Collaborative Design',
                description: 'We work with you to design workflows that fit your team\'s working style and existing processes.'
              },
              {
                title: 'Quality Assurance',
                description: 'Every workflow undergoes rigorous testing to ensure reliability and performance under real conditions.'
              },
              {
                title: 'Knowledge Transfer',
                description: 'We provide comprehensive training and documentation so your team can confidently manage the automation.'
              }
            ].map((approach, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                  <p className="text-blue-100">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Automation experts dedicated to your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Lead Automation Engineer',
                description: '5+ years specializing in n8n workflows and business process optimization'
              },
              {
                name: 'Sarah Chen',
                role: 'Integration Specialist',
                description: 'Expert in API integrations and complex multi-system automations'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Business Analyst',
                description: 'Transforms business requirements into efficient automated workflows'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help automate your workflows and accelerate your growth.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Your Automation Journey
          </button>
        </div>
      </div>
    </div>
  );
};