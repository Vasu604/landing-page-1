import React from 'react';
import { MapPin, Globe, Mail, Phone } from 'lucide-react';
import notedad from '../assets/favicon_logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-50 to-blue-50 border-t-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-sm">NA</span> */}
                <a href="https://notedaddigital.com" target="_blank" rel="noopener noreferrer">
                  <img src={notedad} alt="Noted Ad Digital" />
                </a>
              </div>
              <span className="text-xl font-bold text-gray-800">Noted Ad Digital</span>
            </div>
            <p className="text-gray-600 text-sm">
              Crafting Digital Excellence Since 2022
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://notedaddigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-700 text-white"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">Visit Website</span>
            </a>
          </div>

          {/* Location */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Jalandhar, Punjab, India</span>
            </div>
            
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="font-medium">9781043441, 7009704696</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-blue-100"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">
            Powered By <span className="font-semibold text-blue-600"><a href="https://www.notedaddigital.com/our-team" target="_blank" rel="noopener noreferrer">Noted Ad Digital Team</a></span>. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <span>Designed & Developed with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;