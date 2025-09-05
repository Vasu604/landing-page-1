import { Calendar, Users, Target, ArrowRight, Phone, Clock, CheckCircle, Star, Award, MessageSquare, ChevronDown, X } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { useState } from "react";

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
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Book Your <span className="text-blue-600">Free</span> Strategy Call
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your business with a personalized consultation. We'll analyze your challenges, 
            identify growth opportunities, and provide actionable strategies to 
            <span className="text-blue-600 font-medium"> accelerate your success</span>.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-500 text-sm">Successful Calls</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-gray-500 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">30 Min</div>
              <div className="text-gray-500 text-sm">Average Duration</div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
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
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">No Commitment</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Expert Guidance</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What You'll Get From This Call</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {callBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center bg-gray-50 rounded-lg p-8 mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-2">"This call completely changed how I approach my business strategy."</p>
          <p className="text-gray-500">- Sarah M., Business Owner</p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How long is the strategy call?",
                answer: "The call typically lasts 30 minutes, giving us enough time to understand your business and provide valuable insights."
              },
              {
                question: "Is this really free?",
                answer: "Yes, absolutely! This is a genuine free consultation with no hidden costs or commitments."
              },
              {
                question: "What should I prepare for the call?",
                answer: "Come with your biggest business challenge in mind and any questions about growth strategies you'd like to discuss."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => setShowScheduler(true)}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-colors hover:shadow-lg"
          >
            Book Your Free Call Today
          </button>
          <p className="text-gray-500 text-sm mt-3">Takes less than 2 minutes to schedule</p>
        </div>
      </div>
    </div>
  );
}