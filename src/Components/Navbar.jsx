import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [products, setProducts] = useState({
    sofware: [
      { name: 'WEB-PACS TELE-RADIOLOGY', path: '/products/software/web' },
      { name: 'REALTIME MEDICAL CHECK UP (TELEMEDICINE)', path: '/products/software/mobile' },
      { name: 'PATIENT MONITOR-RMS', path: '/products/software/mobile' },
      { name: 'INDOTELEMED HIS/SIMRS', path: '/products/software/mobile' },
      { name: 'INDOTELEMED DICOM WORKLIST SERVER', path: '/products/software/mobile' },
      { name: 'INDOTELEMED DICOM SCU', path: '/products/software/mobile' },
      { name: 'TB-MODEL TRAINING', path: '/products/software/mobile' },
      { name: 'TB-MODEL TRAINING VALIDATION SOFTWARE', path: '/products/hardware/cpu' },
    ],

    hardware: [
      { name: 'INDOTELEMED SERVER COMPUTER', path: '/products/hardware/cpu' },
      { name: 'INDOTELEMED WORKSTATION COMPUTER', path: '/products/hardware/monitor' },
    ],

    medical: [
      { name: 'INDOTELEMED FLAT PANEL DETECTOR (FPD)', path: '/products/medical/xray' },
      { name: 'INDOTELEMED BLUE PET INKJET', path: '/products/medical/mri' },
    ],
  });

  const [aboutUs, setAboutUs] = useState([
    { name: 'Company Profile', path: '/about/company-profile' },
    { name: 'Partner', path: '/about/partner' },
    { name: 'Population', path: '/about/population' },
    { name: 'Activity', path: '/about/activity' },
    { name: 'Career', path: '/about/career' },
  ]);
  const [services, setServices] = useState([
    { name: 'AFTER SALES SERVICE', path: '/service/1' },
    { name: 'HARDWARE SPESIFICATIONS REFERENCE', path: '/service/2' },
    { name: 'DICOM CALCULATOR', path: '/service/3' },
    { name: 'Q&A PAGE', path: '/service/3' },
  ]);

  const [language, setLanguage] = useState([
    { name: 'Bahasa Indonesia', path: '/language/indonesia', bendera: 'https://flagcdn.com/id.svg' },
    { name: 'English', path: '/language/english', bendera: 'https://flagcdn.com/us.svg' },
  ]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="flex items-center h-[80px] justify-between max-w-7xl w-full mx-auto">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-2">
        <img
          src={logo} // pastikan path benar
          alt="Logo"
          className="h-10 w-10 bg-black rounded-full p-1 object-contain"
        />
        <h1 className="text-xl font-bold flex items-center leading-none">
          <span className="text-blue-600 font-semibold">INDOTELE</span>
          <span className="text-red-600 font-semibold">MED</span>
        </h1>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden pr-6">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md z-50"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 text-sm font-medium">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <details className="group">
                <summary className="cursor-pointer hover:text-blue-600">About Us</summary>
                <div className="pl-4 mt-2 space-y-1">
                  {aboutUs.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer hover:text-blue-600">Products</summary>
                <div className="pl-4 mt-2 space-y-2">
                  <details className="group">
                    <summary className="cursor-pointer">Software</summary>
                    <div className="pl-4 mt-1">
                      {products.sofware.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer">Hardware</summary>
                    <div className="pl-4 mt-1">
                      {products.hardware.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer">Medical Devices</summary>
                    <div className="pl-4 mt-1">
                      {products.medical.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <Link
                    to="/products/other"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-blue-600"
                  >
                    Other Product
                  </Link>
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer hover:text-blue-600">Service</summary>
                <div className="pl-4 mt-2 space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <details className="group">
                <summary className="cursor-pointer hover:text-blue-600">Language</summary>
                <div className="pl-4 mt-2 space-y-1">
                  {language.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={item.bendera}
                        alt={item.name}
                        className="w-5 h-5 object-cover rounded-sm"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 pr-6 relative">
        <Link
          to="/"
          className="hover:text-blue-600"
        >
          Home
        </Link>

        {/* About Us dropdown */}
        <div className="group relative">
          <button className="inline-flex items-center gap-1 hover:text-blue-600">
            About Us <FaChevronDown className="text-xs mt-[2px]" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
            {aboutUs.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Products dropdown with submenus */}
        <div className="group relative">
          <button className="inline-flex items-center gap-1 hover:text-blue-600">
            Products <FaChevronDown className="text-xs mt-[2px]" />
          </button>
          <div className="absolute right-3.5 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
            {/* Software submenu */}
            <div className="relative group/submenu">
              <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                Software <FaChevronRight className="text-xs" />
              </button>
              <div className="absolute left-57 top-[-1rem] w-sm bg-white shadow-lg rounded-md py-2 opacity-0 group-hover/submenu:opacity-100 group-hover/submenu:visible invisible transition-all duration-300 z-50">
                {products.sofware.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Hardware submenu */}
            <div className="relative group/submenu">
              <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                Hardware <FaChevronRight className="text-xs" />
              </button>
              <div className="absolute left-57 top-0 w-78 bg-white shadow-lg rounded-md py-1 opacity-0 group-hover/submenu:opacity-100 group-hover/submenu:visible invisible transition-all duration-300 z-50">
                {products.hardware.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Medical Devices submenu */}
            <div className="relative group/submenu">
              <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                Medical Devices <FaChevronRight className="text-xs" />
              </button>
              <div className="absolute left-57 top-0 w-78 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover/submenu:opacity-100 group-hover/submenu:visible invisible transition-all duration-300 z-50">
                {products.medical.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Product */}
            <Link
              to="/products/other"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Other Product
            </Link>
          </div>
        </div>

        {/* Services dropdown */}
        <div className="group relative">
          <button className="inline-flex items-center gap-1 hover:text-blue-600">
            Service <FaChevronDown className="text-xs mt-[2px]" />
          </button>
          <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          to="/contact"
          className="hover:text-blue-600"
        >
          Contact
        </Link>
        {/* Language dropdown */}
        <div className="group relative">
          <button className="inline-flex items-center gap-1 hover:text-blue-600">
            Language <FaChevronDown className="text-xs mt-[2px]" />
          </button>
          <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
            {language.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <img
                  src={item.bendera}
                  alt={item.name}
                  className="w-5 h-5 object-cover rounded-sm"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
