// import { Apple, Play } from "lucide-react";
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from "react-icons/fa";
export default function TextVideoSection() {
    return (
      <div className="w-full bg-white relative min-h-screen items-center justify-center flex">
        <section className="bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:pl-16 md:pr-0 py-12 md:py-24 max-w-7xl mx-auto relative overflow-visible">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 z-10 relative pb-8 md:pb-0">
  <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
    Intelligent Business Platform
  </h3>
  <h2 className="text-3xl md:text-4xl font-bold">Empower Your Real Estate Operations</h2>
  <p className="text-gray-300 text-sm md:text-base">
  Leverage our platform's smart automation and real-time collaboration tools to manage transactions from anywhere in the world. Gain recognized certifications, earn commissions, and access a global sales management system.
</p>

  <div className="flex flex-wrap gap-3 md:gap-4">
  <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium">
    Visit Business Platform
  </button>
  <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer">
    <FaApple size={24} />
    <span className="text-sm md:text-base">App Store</span>
  </div>

  <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg cursor-pointer">
    <FaGooglePlay size={24} />
    <span className="text-sm md:text-base">Google Play</span>
  </div>
</div>
</div>

          
          {/* Right Side: Video Sticking to Right Edge */}
          <div className="w-full  md:flex md:w-1/2  items-center justify-center md:justify-end relative">
            <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[900px] xl:h-[900px] relative md:absolute md:right-0">
              <video
                className="w-full h-full object-contain md:object-cover  float-end rounded-lg md:rounded-none md:rounded-l-lg"
                autoPlay muted loop playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </div>
    );
  }