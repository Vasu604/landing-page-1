import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Target, BarChart3, Users, Award } from 'lucide-react';

const AboutUs = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [counters, setCounters] = useState({ campaigns: 0, roi: 0, clients: 0, years: 0 });
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
            
            // Trigger counter animations for stats
            if (entry.target.id === 'stats-section') {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const animateCounters = () => {
    const targets = { campaigns: 150, roi: 250, clients: 50, years: 5 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  const StatCard = ({ icon: Icon, number, label, delay = 0 }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
      visibleElements.has('stats-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-3xl font-bold text-blue-600 mb-2">
        {number}{label === 'ROI Improvement' ? '%' : label === 'Years Experience' ? '+' : ''}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );

  const ProcessStep = ({ number, title, description, delay = 0 }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group ${
      visibleElements.has('process-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Performance-focused digital marketing that drives real results
          </p>
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-700 font-medium">Growing businesses worldwide</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" data-animate className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${
            visibleElements.has('stats-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Target} number={counters.campaigns} label="Successful Campaigns" delay={100} />
            <StatCard icon={BarChart3} number={counters.roi} label="ROI Improvement" delay={200} />
            <StatCard icon={Users} number={counters.clients} label="Happy Clients" delay={300} />
            <StatCard icon={Award} number={counters.years} label="Years Experience" delay={400} />
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section id="about-content" data-animate className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${
            visibleElements.has('about-content') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Who We Are</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700">
                We are a performance-focused digital marketing agency dedicated to helping businesses achieve sustainable growth. Our approach is simple yet effective: understand your goals, analyze your market, and implement customized strategies designed to convert.
              </p>
              <p className="text-gray-600">
                With a strong mix of <span className="text-blue-600 font-semibold">creativity</span> and <span className="text-purple-600 font-semibold">data</span>, we provide end-to-end marketing solutions tailored to your business needs. Every campaign we create is built with one goal in mind: delivering <span className="text-green-600 font-semibold">measurable results</span> that drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" data-animate className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${
            visibleElements.has('process-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven three-step methodology that transforms your business goals into measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="Understand Your Goals"
              description="We start by diving deep into your business objectives, target audience, and unique value proposition to create a foundation for success."
              delay={100}
            />
            <ProcessStep
              number="2"
              title="Analyze Your Market"
              description="Through comprehensive market research and competitor analysis, we identify opportunities and develop data-driven strategies."
              delay={200}
            />
            <ProcessStep
              number="3"
              title="Implement & Convert"
              description="We execute customized marketing strategies designed to convert, using creativity and data to maximize your return on investment."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" data-animate className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${
            visibleElements.has('cta-section') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to <span className="text-blue-600">Grow Your Business?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our performance-focused approach can help you achieve sustainable growth.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center space-x-2 mx-auto">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;