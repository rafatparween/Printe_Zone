import React from 'react';

const Faq = () => {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="text-center">
        <p className="text-green-600 text-[24px] font-medium">Faq</p>
        <h2 className="text-[42] md:text-5xl font-bold mt-2 ">
        Freequently asked
          <br />
          questions
        </h2>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Image Container */}
        <div className="relative w-full md:w-1/2">
          <div className="relative p-4 bg-[#3FA4D7] rounded-xl overflow-visible h-[400px] w-[550px] pl-8 pt-8 pr-0 ml-[300px]">
            <img
              src="/student.jpg"
              alt="Team working"
              className="w-[564px] h-[410px] object-cover rounded-xl md:-mr-20"
            />
          </div>
          {/* Decorative Dots */}  
          <div className="absolute -bottom-8 -left-8 animate-float">
            {/* <div className="grid grid-cols-2 gap-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-green-400 rounded-full"
                ></div>
              ))}
            </div> */}
            <img
              src="/dot.png"
              alt="Team working"
              className='h-[100px] w-[33px]'
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <p className="text-gray-600 w-[564px] h-[72px]">
            Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                  <span>✓</span>
                </div>
              </div>
              <p className="ml-2 text-gray-600">
                Sea of Tranquility dispassionate observer dream.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                  <span>✓</span>
                </div>
              </div>
              <p className="ml-2 text-gray-600">
                Muse about as a patch of light brain is the seed of intelligence.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                  <span>✓</span>
                </div>
              </div>
              <p className="ml-2 text-gray-600">
                The only home we’ve ever known dream of the mind’s eye.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-10 flex justify-center space-x-4 bg-[#3FA4D7] w-[734px] rounded-[20px] ml-[864px] mt-[-75px]">
        <div className="flex flex-col items-center p-4  text-white rounded-lg ">
          <h3 className="text-3xl font-bold">150+</h3>
          <p>Project Delivered</p>
        </div>
        <div className="flex flex-col items-center p-4 text-white rounded-lg">
          <h3 className="text-3xl font-bold">180+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="flex flex-col items-center p-4  text-white rounded-lg">
          <h3 className="text-3xl font-bold">5+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
