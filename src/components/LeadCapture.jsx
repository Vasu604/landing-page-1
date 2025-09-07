import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Shield,
  Target,
  TrendingUp,
  User,
  Mail,
  IndianRupee,
  ChevronDown,
  Star,
  Users,
  Globe,
  
  Phone
} from 'lucide-react';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

// Simplified Custom Select fn.
const CustomSelect = ({ options, placeholder, value, onChange, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300 flex items-center justify-between transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5 text-gray-400" />
          <span className={value ? 'text-gray-900' : 'text-gray-500'}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-150 border-b border-gray-100 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Simplified Input
const FormInput = ({ type, placeholder, value, onChange, icon: Icon, required }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300 transition-all duration-200"
    />
  </div>
);

// Simplified Benefits
const Benefits = () => {
  const benefits = [
    { icon: Clock, title: "Quick Response", description: "Get your plan within 24 hours" },
    { icon: Shield, title: "No Commitment", description: "Free consultation, no obligations" },
    { icon: Target, title: "Tailored Strategy", description: "Customized for your business" },
    { icon: Star, title: "Expert Team", description: "Experienced professionals" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <benefit.icon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Simplified Trust Indicators
const TrustIndicators = () => {
  const indicators = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: TrendingUp, number: "250%", label: "Avg ROI" },
    { icon: Star, number: "4.9/5", label: "Rating" }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {indicators.map((item, index) => (
        <div key={index} className="text-center">
          <div className="p-3 bg-blue-50 rounded-lg inline-block mb-2">
            <item.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-xl font-bold text-gray-900 mb-1">
            {item.number}
          </div>
          <div className="text-sm text-gray-600">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Form Component
const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({ service: '', budget: '', name: '', email: '', mobile: '' });
  const [isLoading, setIsLoading] = useState(false);
  // added
  const serviceOptions = [
    'Social Media Marketing',
    'Paid Advertising Campaigns', 
    'Customized Strategy Plans',
    'Google Ads & Search Campaigns',
    'Website Design & Development',
    'Project Management Services',
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
      // 1) Save to Google Sheets
      const googleSheetUrl = "https://script.google.com/macros/s/AKfycbx1VkSpBq5lQf3AQld9iJUn4OxibF7cZlaZ5TV1nimJUOQVVQzsUBExag3Yu9erevNIAQ/exec";
      const formBody = `Service=${encodeURIComponent(formData.service)}&Budget=${encodeURIComponent(formData.budget)}&Name=${encodeURIComponent(formData.name)}&Email=${encodeURIComponent(formData.email)}&Mobile=${encodeURIComponent(formData.mobile)}`;

      const googleResponse = await fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      if (!googleResponse.ok) throw new Error("Failed to save to Google Sheets");

      // 2) Send email via EmailJS
      const serviceID = "service_nfcu5ve";
      const templateID = "template_74bwmc9";
      const publicKey = "GPa7XOO7AtlpBLQZF";

      const templateParams = {
        title: formData.title || 'New Contact Form Submission',
        to_email: "Info.nadwebsite@gmail.com",
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message || "No message added",
        service: formData.service,
        budget: formData.budget,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success("🎉 Form submitted successfully! We'll get back to you soon.");
      setFormData({ service: '', budget: '', name: '', email: '', mobile: '' });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.service && formData.budget && formData.name && formData.email && formData.mobile;

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">Free Consultation</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Get a Tailored Marketing Plan 
                <span className="text-blue-600"> in Minutes</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Provide us with a few details, and we'll create a customized plan aligned with your goals and budget.
              </p>
            </div>
            
            <TrustIndicators />
            <Benefits />
          </div>

          {/* Right Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Success Journey</h2>
                <p className="text-gray-600">Fill out the form to get your free customized plan</p>
              </div>

              <div className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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

                {/* Mobile Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <FormInput
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    icon={Phone}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading || !isFormValid}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed px-6 py-4 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Free Plan</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">
                    We respect your privacy. Your information is secure and will never be shared.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
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
  );
};

export default LeadCaptureForm;