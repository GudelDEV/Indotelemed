import { useState } from 'react';
import dashbahboardImage from '../assets/dashboard.png';
import Button from './Button';

// LandingPage.jsx
function LandingPage() {
  const [subButtons, setSubButtons] = useState(['Overview', 'Statistics', 'Team']);
  return (
    <>
      <section className="w-full overflow-hidden h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="w-full text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-snug font-Roboto">
              INDOTELEMED WEB-
              <br />
              PACS TELE-RADIOLOGY
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-poppins leading-relaxed">
              INDOTELEMED ensures a fast and reliable way to search, view, analyze and diagnose medical images from anywhere and on any device. The web-based DICOM Viewer was developed using responsive design, which allows medical images to
              be accessed not only on computers, but also on tablets, smartphones or other devices with mobile viewing functionality.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              <Button
                link={'/leaarn'}
                variants={'border text-gray-800 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 transition'}
              >
                Learn More
              </Button>
              <Button
                link={'/demo'}
                variants={'bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition'}
              >
                Request Demo
              </Button>
            </div>

            {/* Extra Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-2 pt-2 sm:pt-3">
              {subButtons.map((label, index) => (
                <button
                  key={index}
                  className="px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center relative overflow-visible z-10">
            <img
              src={dashbahboardImage}
              alt="Dashboard"
              className="w-full h-auto object-contain rounded-xl shadow-2xl z-10 relative"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default LandingPage;
