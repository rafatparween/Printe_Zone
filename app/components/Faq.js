// import React from 'react';

// const Faq = () => {
//   return (
//     <div className="py-16 px-4 md:px-8">
//       <div className="text-center">
//         <p className="text-green-600 text-[24px] font-medium">Faq</p>
//         <h2 className="text-[42] md:text-5xl font-bold mt-2 ">
//           Freequently asked
//           <br />
//           questions
//         </h2>
//       </div>

//       {/* Content Section */}
//       <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
//         {/* Image Container */}
//         <div className="relative w-full md:w-1/2">
//           <div className="relative p-4 bg-[#3FA4D7] rounded-xl overflow-visible h-[400px] w-[550px] pl-8 pt-8 pr-0 ml-[300px]">
//             <img
//               src="/student.jpg"
//               alt="Team working"
//               className="w-[564px] h-[410px] object-cover rounded-xl md:-mr-20"
//             />
//           </div>
//           {/* Decorative Dots */}
//           <div className="absolute -bottom-8 -left-8 animate-float">
//             {/* <div className="grid grid-cols-2 gap-2">
//               {[...Array(10)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="w-3 h-3 bg-green-400 rounded-full"
//                 ></div>
//               ))}
//             </div> */}
//             <img
//               src="/dot.png"
//               alt="Team working"
//               className='h-[100px] w-[33px]'
//             />
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="w-full md:w-1/2 text-left space-y-4">
//           <p className="text-gray-600 w-[564px] h-[72px]">
//             How To Gain Knowledge About SEO? </p>
//           <ul className="space-y-2">
//             <li className="flex items-start">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
//                   <span>✓</span>
//                 </div>
//               </div>
//               <p className="ml-2 text-gray-600">
//                 Sea of Tranquility dispassionate observer dream.
//               </p>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
//                   <span>✓</span>
//                 </div>
//               </div>
//               <p className="ml-2 text-gray-600">
//                 Muse about as a patch of light brain is the seed of intelligence.
//               </p>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
//                   <span>✓</span>
//                 </div>
//               </div>
//               <p className="ml-2 text-gray-600">
//                 The only home we’ve ever known dream of the mind’s eye.
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Statistics */}
//     </div>
//   );
// };

// export default Faq;


import Image from 'next/image';

const FAQ = () => {
  return (
    <section className="flex justify-center items-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full px-4">
        
        {/* Left side - Image */}
        <div className="relative w-full md:w-1/2">
          <div className="relative p-4 bg-[#3FA4D7] rounded-xl overflow-visible h-[400px] w-[623px] pl-8 pt-8 pr-0 ">
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
              className='h-[100px] w-[33px] mb-[417px] ml-[586px]'
            />
          </div>
        </div>
        

        {/* Right side - FAQ */}
        <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[26px] text-[#0AC17C] font-medium font-dancing">Faq</h2>
 
          <h2 className="text-3xl font-bold text-[42px]">Frequently asked questions</h2>
          
          <div className="space-y-4 top-0 left-0 w-full h-full bg-gradient-to-r from-customGreen to-customBlue opacity-90 rounded-3xl w-[525px] pt-[65px] pl-[40px] pr-[36px] xl:h-[327px] 2xl:h-[327px]">
            <details className="group border-b-2 pb-2 border-white">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center group-open:text-[white] text-[white]">
                How To Gain Knowledge About SEO?
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="mt-2 text-[white]">
                Learning SEO can be done through various resources like online tutorials, courses, and practice.
              </p>
            </details>

            <details className="group border-b-2 pb-2 border-white">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center group-open:text-white text-[white]">
                Benefit Of Digital Marketing?
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="mt-2 text-white">
                Digital marketing allows you to reach a broader audience, target specific groups, and measure your results effectively.
              </p>
            </details>

            <details className="group border-b-2 pb-2 border-white">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center group-open:text-white text-[white]">
                Business Development Most Reasons?
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="mt-2 text-white">
                Business development helps in expanding the reach, identifying new opportunities, and ensuring long-term success.
              </p>
            </details>

            <details className="group border-b-2 pb-2 border-white">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center group-open:text-white text-[white]">
                Improve Performance and Efficiency?
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="mt-2 text-white">
                Improving performance and efficiency involves streamlining processes, adopting new technologies, and regularly evaluating progress.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
