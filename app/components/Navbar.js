"use client"
import { useEffect, useState } from 'react';

const TypewriterEffect = () => {
  const texts = [
    'MLM Software',
    'AI Development',
    'AEM Development',
    'IoT Development',
    'Website & Apps'
  ];

  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopIndex % texts.length];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setSpeed(75);

        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setSpeed(150);

        if (charIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, charIndex, loopIndex, speed, texts]);

  return (
    <span className="text-green-500">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default function Home() {
  return (
    <div className="h-[720px] bg-[#fffef2]">
      <nav className="flex justify-between items-center p-8">
        <div className="flex space-x-6 text-gray-800 ml-[700px]">
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Home</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">About Us</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Services</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Testimonials</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">FAQ</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Contact Us</a>
        </div>
        <a href="tel:+123456789" className="bg-gradient-to-r from-customGreen to-customBlue text-white px-6 py-2 rounded-full mr-[242px]">
          +12345 6789
        </a>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex items-center mt-16 px-6 ">
        {/* Text Section */}
        <div className="w-1/2">
          <h1 className="text-2xl text-green-600 text-[26px] font-medium font-dancing">Creative Digital Agency</h1>
          <h2 className="text-5xl font-bold mt-4 w-[476px]">
            We build creative
            <br></br>
            <TypewriterEffect />
          </h2>
          <p className="mt-4 text-gray-600">
            The carbon in our apple pies extraordinary claims require extraordinary evidence permanence of the stars energy.
          </p>
          <button className="mt-6 bg-[#3fa4d7] text-white px-6 py-3 rounded h-[48px] w-[150px]">
            Get Started
          </button>
          <div className="h-[565px] w-[779px] ml-[-294px] bg-[url('/circlebackground.svg')] bg-no-repeat bg-[length:70%] bg-[position:bottom_left] opacity-[0.08] absolute top-[16%]">
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-end">
          <div className="relative rounded-full overflow-hidden h-96 w-[600px] bg-[url('/imagebackground.png')] animate-float">
            <img
              src="https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Programming on Laptop"
              layout="fill"
              objectFit="cover"
              className="h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
