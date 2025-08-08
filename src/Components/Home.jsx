import Navbar from './Navbar'; // Assuming you have a Navbar component
import LandingPage from './LandingPage'; // Assuming you have a HeroSection component

function Home() {
  return (
    <>
      {/* Navabr - start */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow h-[80px]">
        <Navbar />
      </header>

      {/* Navabr - end */}

      {/* Hero Section - start */}
      <section className="h-[100vh] relative">
        <LandingPage />
        <div
          className="
    w-[80vw] max-w-[650px] 
    h-[80vw] max-h-[650px] 
    bg-[#40E0D0] rounded-full shadow-2xl 
    absolute top-[-10px] right-[-3rem] z-[-5] opacity-50
    sm:w-[400px] sm:h-[400px]
    lg:w-[650px] lg:h-[650px]
  "
        ></div>
      </section>

      {/* Hero Section - end */}
    </>
  );
}

export default Home;
