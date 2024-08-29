// pages/index.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">About us</h3>
          <p className="text-sm mt-2">
            Welcome to Printezone, where innovation is our driving force. Join us on a journey of growth and success as we help you elevate your digital presence and achieve dominance in your industry.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebook className="text-white hover:text-teal-500 transition duration-300" size={24} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <FaTwitter className="text-white hover:text-teal-500 transition duration-300" size={24} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram className="text-white hover:text-teal-500 transition duration-300" size={24} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <FaYoutube className="text-white hover:text-teal-500 transition duration-300" size={24} />
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 text-sm">
        © 2024 by Printezone. All rights reserved. | <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
