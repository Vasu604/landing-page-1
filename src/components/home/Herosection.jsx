import React, { useState, useEffect, useRef } from 'react';
import { Play, BarChart3, Target, TrendingUp, ArrowRight, Star, Users, Globe } from 'lucide-react';
import notedad from '../../assets/favicon_logo.png';


const Navbar = () => (
  <nav className="w-full bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* <div className="text-2xl font-bold text-gray-900">Noted Ad Digital</div> */}
        <img
          src={notedad}
          alt="Noted Ad Digital Logo"
          className="h-18 w-auto"  // increased size
        />
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);


// Simple counter hook
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStartedRef.current) return;
    
    hasStartedRef.current = true;
    let startTime = null;
    let animationId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [end, duration, shouldStart]);

  return count;
};

// Stats display component
const StatsDisplay = ({ end, label, suffix = '', duration = 2000, statsVisible }) => {
  const count = useCounter(end, duration, statsVisible);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

// Service highlights
const ServiceHighlights = () => {
  const services = [
    { icon: BarChart3, title: "Data-Driven Campaigns", desc: "Analytics-powered strategies" },
    { icon: Target, title: "Targeted Marketing", desc: "Reach your ideal customers" },
    { icon: TrendingUp, title: "Growth Focused", desc: "Measurable ROI increases" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
      {services.map((service, index) => (
        <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <service.icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

const Herosection = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection observer for stats animation
  useEffect(() => {
    if (!statsRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(statsRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [statsVisible]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Trust badge */}
          <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-12">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-700 font-medium">
              Trusted by 500+ businesses worldwide
            </span>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Digital Marketing Solutions
              <br />
              <span className="text-blue-600">That Drive Growth</span>
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-6 mb-16 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">Noted Ad Digital</span>, we specialize in building{' '}
              <span className="font-semibold text-gray-900">data-driven campaigns</span>{' '}
              that attract the right audience, generate qualified leads, and maximize return on investment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're looking to establish your brand, scale your reach, or improve sales, our team ensures your marketing investment delivers{' '}
              <span className="font-semibold text-green-600">real results</span>.
            </p>
          </div>

          {/* Service highlights */}
          <ServiceHighlights />

          {/* Video section */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
                
                {/* Floating service icons */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                
                {/* Play button */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                    Watch Our Success Stories
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center space-x-3 mx-auto">
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats section */}
          <div ref={statsRef} className="border-t border-gray-200 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatsDisplay end={500} label="Happy Clients" suffix="+" duration={2500} statsVisible={statsVisible} />
              <StatsDisplay end={250} label="ROI Increase" suffix="%" duration={3000} statsVisible={statsVisible} />
              <StatsDisplay end={98} label="Success Rate" suffix="%" duration={2000} statsVisible={statsVisible} />
              <StatsDisplay end={50} label="Countries Served" suffix="+" duration={2200} statsVisible={statsVisible} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;