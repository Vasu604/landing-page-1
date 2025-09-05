import React, { useState, useEffect, useRef } from 'react';
import { 
  Share2, 
  Target, 
  TrendingUp, 
  Search, 
  BarChart3, 
  Video,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Play,
  Star
} from 'lucide-react';

// Service card component
const ServiceCard = ({ service, index, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 p-6 group hover:border-blue-200 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        {/* Icon and number */}
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-lg ${service.bgColor} group-hover:scale-110 transition-transform duration-200`}>
            <service.icon className={`w-6 h-6 ${service.iconColor}`} />
          </div>
          <div className="text-3xl font-bold text-gray-300">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-0 mb-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <button className="w-full bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 text-blue-600 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group/btn">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button> */}
      </div>
    </div>
  );
};

// Services data
const services = [
  {
    title: "Social Media Marketing",
    description: "Build and maintain a strong presence across platforms like Facebook, Instagram, and LinkedIn to engage your target audience effectively.",
    icon: Share2,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    features: [
      "Multi-platform content strategy",
      "Community management & engagement",
      "Brand voice development",
      "Performance analytics & insights"
    ]
  },
  {
    title: "Paid Advertising Campaigns",
    description: "Create and manage high-performing ad campaigns across Google and social media to maximize reach and ROI.",
    icon: Target,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    features: [
      "Campaign setup & optimization",
      "Audience targeting & segmentation", 
      "A/B testing & performance tracking",
      "Budget optimization strategies"
    ]
  },
  {
    title: "Customized Strategy Plans",
    description: "Develop personalized growth roadmaps designed around your specific business objectives and market conditions.",
    icon: TrendingUp,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    features: [
      "Market research & competitor analysis",
      "Goal setting & KPI definition",
      "Timeline & milestone planning",
      "Regular strategy reviews"
    ]
  },
  {
    title: "Google Ads & Search Campaigns",
    description: "Appear at the top when potential customers are actively searching for your products or services.",
    icon: Search,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    features: [
      "Keyword research & optimization",
      "Ad copy creation & testing",
      "Landing page optimization",
      "Conversion tracking setup"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility on search engines, drive organic traffic, and increase long-term brand authority.",
    icon: BarChart3,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    features: [
      "On-page & technical SEO",
      "Content optimization",
      "Link building strategies",
      "Local SEO implementation"
    ]
  },
  {
    title: "Video Shoot & Production",
    description: "Professionally produced videos that build trust, improve engagement, and drive higher conversion rates.",
    icon: Video,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    features: [
      "Concept development & scripting",
      "Professional filming & editing",
      "Motion graphics & animations",
      "Multi-format optimization"
    ]
  }
];

// Stats component
const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "250%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <stat.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// Main component
const ServicesPage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            We offer a comprehensive range of services to ensure your brand stands out, connects with the right customers, and delivers consistent performance.
          </p>

          {/* Stats */}
          <StatsSection />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => cardRefs.current[index] = el}
                data-index={index}
              >
                <ServiceCard 
                  service={service} 
                  index={index} 
                  isVisible={visibleCards.has(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your <span className="text-blue-600">Business?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our comprehensive digital marketing services can help you achieve your business goals and drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;