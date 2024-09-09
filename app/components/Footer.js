// // pages/index.js
// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <h3 className="text-lg font-semibold">About us</h3>
//           <p className="text-sm mt-2">
//             Welcome to Printezone, where innovation is our driving force. Join us on a journey of growth and success as we help you elevate your digital presence and achieve dominance in your industry.
//           </p>
//         </div>
//         <div className="flex space-x-4">
//           <Link href="https://www.facebook.com" target="_blank">
//             <FaFacebook className="text-white hover:text-teal-500 transition duration-300" size={24} />
//           </Link>
//           <Link href="https://www.twitter.com" target="_blank">
//             <FaTwitter className="text-white hover:text-teal-500 transition duration-300" size={24} />
//           </Link>
//           <Link href="https://www.instagram.com" target="_blank">
//             <FaInstagram className="text-white hover:text-teal-500 transition duration-300" size={24} />
//           </Link>
//           <Link href="https://www.youtube.com" target="_blank">
//             <FaYoutube className="text-white hover:text-teal-500 transition duration-300" size={24} />
//           </Link>
//         </div>
//       </div>
//       <div className="container mx-auto text-center mt-4 text-sm">
//         © 2024 by Printezone. All rights reserved. | <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center h-[268px]">
        
        {/* About Us Section */}
        <div className="mb-6 md:mb-0 xl:ml-[300px] 2xl:ml-[300px]">
          <h2 className="text-xl font-bold mb-2 w-[438px] h-[28px] text-[24px]">About us</h2>
          <p className="text-sm max-w-sm w-[438px] h-[96px] text-[16px]">
            Welcome to Printezone, where innovation is our driving force. Join us on a journey of growth and success as we help you elevate your digital presence and achieve dominance in your industry.
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-2 h-[28px] w-[360px] text-[24px] mb-[8px] ">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-lg transition hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6 ">
        <p>© 2024 by Printezone. All rights reserved. | <a href="#" className="underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;

