import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center h-[268px]">
        
        {/* About Us Section */}
        <div className="mb-6 md:mb-0 xl:ml-[300px] 2xl:ml-[300px]">
          <h2 className="text-xl font-bold mb-2 w-[438px] h-[28px] text-[24px]">About us</h2>
          <p className="text-sm max-w-sm w-[438px] h-[96px] text-[20px]">
            Welcome to Micro sonic, where innovation is our driving force. Join us on a journey of growth and success as we help you elevate your digital presence and achieve dominance in your industry.
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-2 h-[28px] w-[360px] text-[24px] mb-[8px] ">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:bg-gradient-to-br from-purple-800 via-blue-800 to-gray-800">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:bg-gradient-to-br from-purple-800 via-blue-800 to-gray-800">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:fbg-gradient-to-br from-purple-800 via-blue-800 to-gray-800">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:fbg-gradient-to-br from-purple-800 via-blue-800 to-gray-800">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6 ">
        <p>© 2024 by Micro-Sonic. All rights reserved. | <a href="#" className="underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;

