import { Calendar, Users, Target, ArrowRight, Phone, Clock, CheckCircle, Star, Award, MessageSquare, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

export default function BookCallSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false);


  const callBenefits = [
    "Personalized growth strategy tailored to your business",
    "Identification of untapped revenue opportunities",
    "Solution to your biggest business challenge",
    "Proven tactics used by successful companies",
    "Clear roadmap for the next 90 days"
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg shadow-purple-500/25">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Book Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Free</span> Strategy Call
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with a personalized consultation. We'll analyze your challenges, 
              identify growth opportunities, and provide actionable strategies to 
              <span className="text-blue-400 font-semibold"> accelerate your success</span>.
            </p>
            
          
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-gray-400">Successful Calls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">30 Min</div>
                <div className="text-gray-400">Average Duration</div>
              </div>
            </div>

          </div>

          {/* Main CTA */}
          <div className="text-center mb-20">
            <div className="inline-block relative">
              {!showScheduler ? (
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setShowScheduler(true)}
                  className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl text-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="flex items-center gap-4">
                    <Calendar className="w-6 h-6" />
                    Schedule Your Free Strategy Call Now
                    <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                  </span>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                </button>
              ) : (
                <div className="relative w-full max-w-2xl mx-auto">
                  <button
                    aria-label="Close scheduler"
                    onClick={() => setShowScheduler(false)}
                    className="absolute -top-3 -right-3 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 shadow"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <InlineWidget
                    url="https://calendly.com/seetamdass3919/new-meeting"
                    styles={{ height: "700px", width:"500px" }}
                  />
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Clock className="w-5 h-5" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Award className="w-5 h-5" />
                <span>Expert Guidance</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

     </div>
  );
}