import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Clock,
  Shield,
  Target,
  TrendingUp,
  User,
  Mail,
  IndianRupee,
  ChevronDown,
  Star,
  Award,
  Users,
  Globe
} from 'lucide-react';
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// ---------------- Global Styles ----------------
const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes float-delay {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(-180deg); }
    }
    @keyframes gradient-flow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
      50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
    }
    @keyframes slide-in-left {
      from { transform: translateX(-30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slide-in-right {
      from { transform: translateX(30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fade-in-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes border-flow {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delay { animation: float-delay 8s ease-in-out infinite; }
    .animate-gradient-flow { 
      background-size: 200% 200%;
      animation: gradient-flow 3s ease-in-out infinite;
    }
    .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
    .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
    .animate-slide-in-right { animation: slide-in-right 0.6s ease-out forwards; }
    .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
    .animate-border-flow { animation: border-flow 2s linear infinite; }
  `}</style>
);

// ---------------- Floating Particles ----------------
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: 3 + Math.random() * 4,
    type: i % 3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`
          }}
        >
          <div 
            className={`rounded-full opacity-40 ${
              particle.type === 0 ? 'w-1 h-1 bg-cyan-400 animate-ping' :
              particle.type === 1 ? 'w-2 h-2 bg-purple-400 animate-pulse' :
              'w-1.5 h-1.5 bg-pink-400 animate-bounce'
            }`}
            style={{ animationDelay: `${particle.id * 0.2}s` }}
          />
        </div>
      ))}
    </div>
  );
};

// ---------------- Custom Select ----------------
const CustomSelect = ({ options, placeholder, value, onChange, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-6 py-4 text-left text-white focus:outline-none focus:border-cyan-400 transition-all duration-300 hover:border-white/20 flex items-center justify-between group"
      >
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5 text-gray-400 group-focus:text-cyan-400" />
          <span className={value ? 'text-white' : 'text-gray-400'}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-6 py-4 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-200 border-b border-white/5 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ---------------- Input ----------------
const FormInput = ({ type, placeholder, value, onChange, icon: Icon, required }) => (
  <div className="relative group">
    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
      <Icon className="w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-gray-800/50 border border-white/10 rounded-xl pl-16 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800/70 transition-all duration-300 hover:border-white/20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
  </div>
);

// ---------------- Benefits ----------------
const Benefits = () => {
  const benefits = [
    { icon: Clock, title: "Quick Response", description: "Get your customized plan within 24 hours of submission" },
    { icon: Shield, title: "No Commitment", description: "Free consultation with absolutely no obligations" },
    { icon: Target, title: "Tailored Strategy", description: "Plans designed specifically for your business needs" },
    { icon: Award, title: "Expert Team", description: "Experienced professionals with proven track records" }
  ];

  return (
    <div className="space-y-6">
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <benefit.icon className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------------- Trust Indicators ----------------
const TrustIndicators = () => {
  const indicators = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: TrendingUp, number: "250%", label: "Avg ROI Increase" },
    { icon: Star, number: "4.9/5", label: "Client Rating" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {indicators.map((item, index) => (
        <div key={index} className="text-center group">
          <div className="relative inline-block mb-3">
            <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-6 h-6 text-cyan-400 mx-auto" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
            {item.number}
          </div>
          <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------------- Main Form ----------------
const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({ service: '', budget: '', name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const serviceOptions = [
    'Social Media Marketing',
    'Paid Advertising Campaigns', 
    'Customized Strategy Plans',
    'Google Ads & Search Campaigns',
    'Search Engine Optimization (SEO)',
    'Video Shoot & Production',
    'Complete Digital Marketing Package'
  ];

  const budgetOptions = [
    '₹30,000 – ₹50,000',
    '₹50,000 – ₹1,00,000', 
    'Above ₹1,00,000',
    'I need guidance on budget'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
  setIsLoading(true);

  try {
    // 1️⃣ Save to Google Sheets
    const googleSheetUrl = "https://script.google.com/macros/s/AKfycbxn7-jCX9kr9bk7K-OG0ZynsW2BiZIMZ3gVQF0Gu6XZvp6-twduAOkETucy-fBuKe17UA/exec";
    const formBody = `Service=${encodeURIComponent(formData.service)}&Budget=${encodeURIComponent(formData.budget)}&Name=${encodeURIComponent(formData.name)}&Email=${encodeURIComponent(formData.email)}`;

    const googleResponse = await fetch(googleSheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });

    if (!googleResponse.ok) throw new Error("Failed to save to Google Sheets");

    // 2️⃣ Send email with EmailJS
    const serviceID = "service_nfcu5ve";
    const templateID = "template_74bwmc9";
    const publicKey = "GPa7XOO7AtlpBLQZF";

    // 🔹 Build templateParams with forced owner email
    const templateParams = {
      title: formData.title || 'New Contact Form Submission',
      to_email: "Info.nadwebsite@gmail.com", // force send to owner
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile || "Not Provided",
      message: formData.message || "No message added",
      service: formData.service,
      budget: formData.budget,
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey);

    // ✅ Success
    toast.success("🎉 Form submitted successfully! We'll get back to you soon.");
    setIsSubmitted(true);
    setFormData({ service: '', budget: '', name: '', email: '' });

  } catch (error) {
    console.error("Form submission error:", error);
    toast.error("❌ Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  // ---------------- Form UI ----------------
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <GlobalStyles />
      <FloatingParticles />

      <div className="pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Lead Capture Form</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-gradient-flow">
                  Get a Tailored Marketing Plan
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-flow">
                  in Less Than a Minute
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Provide us with a few details, and we will create a customized plan aligned with your goals and budget.
            </p>
            <TrustIndicators />
            <Benefits />
          </div>

            {/* Right side - Form */}
            <div className="animate-slide-in-right">
              <div className="sticky top-32">
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/10 to-cyan-500/0 opacity-50 rounded-3xl animate-border-flow" />
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Start Your Success Journey</h2>
                      <p className="text-gray-400">Fill out the form below to get your free customized plan</p>
                    </div>

                    <div className="space-y-6">
                      {/* Service Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Select Your Service *
                        </label>
                        <CustomSelect
                          options={serviceOptions}
                          placeholder="Choose the service you're interested in"
                          value={formData.service}
                          onChange={(value) => handleInputChange('service', value)}
                          icon={Target}
                        />
                      </div>

                      {/* Budget Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Estimated Monthly Budget *
                        </label>
                        <CustomSelect
                          options={budgetOptions}
                          placeholder="Select your budget range"
                          value={formData.budget}
                          onChange={(value) => handleInputChange('budget', value)}
                          icon={IndianRupee}
                        />
                      </div>

                      {/* Name Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Your Name *
                        </label>
                        <FormInput
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          icon={User}
                          required
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Email Address *
                        </label>
                        <FormInput
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          icon={Mail}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading || !formData.service || !formData.budget || !formData.name || !formData.email}
                        className="w-full group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-500 hover:scale-105 disabled:scale-100 shadow-2xl hover:shadow-cyan-500/40 overflow-hidden disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-3">
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Processing Your Request...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit My Request</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                        {!isLoading && (
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                        )}
                      </button>

                      {/* Privacy note */}
                      <div className="text-center space-y-2">
                        <p className="text-sm text-gray-500">
                          We respect your privacy. Your information is secure and will never be shared.
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                          <span className="flex items-center space-x-1">
                            <Shield className="w-3 h-3" />
                            <span>SSL Secured</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>GDPR Compliant</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LeadCaptureForm;