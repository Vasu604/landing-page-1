import React, { useState, useEffect } from 'react';
import Herosection from './components/home/Herosection';
import AboutUs from './components/home/Aboutus';
import ServicesPage from './components/Services';
import LeadCaptureForm from './components/LeadCapture';
import BookCallSection from './components/Calls';
import WhyChooseNotedAd from './components/Whychoose';
import Closing from './components/Closing';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App update
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Scroll progress tracking
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Section detection for auto transitions
      const sections = document.querySelectorAll('section, [data-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-scroll to next section (optional - can be triggered by user interaction)
  const scrollToSection = (sectionIndex) => {
    const sections = document.querySelectorAll('section, [data-section]');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Herosection />} />
        <Route path="/LeadCaptureForm" element={<LeadCaptureForm />} />
      </Routes>

      {/* Wrap everything in one parent */}
      <div className="relative overflow-hidden">
        {/* Loading Animation */}
        <div
          className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
            <div className="text-white text-xl font-semibold animate-pulse">
              Loading Experience...
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-40">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Section Navigation Dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentSection === index
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-400/50'
                  : 'bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Content with Staggered Animations */}
        <main
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <section
            data-section="0"
            className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            {/* <Herosection /> */}
          </section>

          {/* About Section */}
          <section
            data-section="1"
            className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <AboutUs />
          </section>

          <section
            data-section="2"
            className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <ServicesPage />
          </section>

          <section
            data-section="3"
            className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <LeadCaptureForm />
          </section>

          <section
            data-section="4"
            className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <BookCallSection />
          </section>

          <section
            data-section="5"
            className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <WhyChooseNotedAd />
            <Closing />
            <Footer />
          </section>
        </main>

        {/* Floating Action Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group ${scrollProgress > 20
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </button>
      </div>
    </Router>
  );
};

export default App;
