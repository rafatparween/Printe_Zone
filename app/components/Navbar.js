export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffef2] h-[780px]">
      <nav className="flex justify-between items-center p-8">
        <div className="flex space-x-6 text-gray-800 ml-[700px]">
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Home</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">About Us</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Services</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Testimonials</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">FAQ</a>
          <a href="#" className="hover:text-green-500 text-[20px] font-semibold">Contact Us</a>
        </div>
        <a href="tel:+123456789" className="bg-green-500 text-white px-6 py-2 rounded-full mr-[242px]">
          +12345 6789
        </a>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex items-center mt-16 px-6 ">
        {/* Text Section */}
        <div className="w-1/2">
          <h1 className="text-2xl text-green-600 font-semibold">Creative Digital Agency</h1>
          <h2 className="text-5xl font-bold mt-4">
            We build creative <span className="text-green-500">MLM Software</span>
          </h2>
          <p className="mt-4 text-gray-600">
            The carbon in our apple pies extraordinary claims require extraordinary evidence permanence of the stars energy.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded">
            Get Started
          </button>
          <div className="h-[640px] w-[779px] ml-[-294px] bg-[url('/circlebackground.svg')] bg-no-repeat bg-[length:70%] bg-[position:bottom_left] opacity-[0.08] absolute top-[16%]">
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-end">
          <div className="relative rounded-full overflow-hidden h-96 w-9600 bg-[url('/imagebackground.png')] relative h-[500px] w-[600px] animate-float">
            <img
              src="/computer.jpg" 
              alt="Programming on Laptop"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


