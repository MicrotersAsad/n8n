import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AutoFlow Pro</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We help businesses automate their workflows using n8n, saving time and increasing efficiency through intelligent automation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@autoflowpro.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Automation St, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">CRM Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">E-commerce Integration</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Data Processing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">HR & Operations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AutoFlow Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};