import { BarChart3, Target, Eye, Award, Settings, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function WhyChooseNotedAd() {
  const features = [
    {
      icon: BarChart3,
      title: "Data-Driven Marketing",
      description: "Every campaign is built on insights and analytics, not assumptions.",
      benefits: ["Advanced Analytics Dashboard", "Real-time Performance Tracking", "Predictive Campaign Insights"],
      featured: false
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "We design strategies unique to your business goals, industry, and audience.",
      benefits: ["Custom Strategy Development", "Industry-Specific Approach", "Audience Segmentation"],
      featured: true
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      description: "Clear performance tracking and reporting so you know exactly how your budget is utilized.",
      benefits: ["Monthly Detailed Reports", "Budget Utilization Tracking", "ROI Performance Analysis"],
      featured: false
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Our team has delivered measurable results for clients across multiple industries.",
      benefits: ["5+ Years Experience", "Industry Certified Team", "Award-Winning Campaigns"],
      featured: false
    },
    {
      icon: Settings,
      title: "Flexible Plans",
      description: "Services and strategies designed to fit varying business sizes and budgets.",
      benefits: ["Scalable Service Packages", "Budget-Conscious Options", "Month-to-Month Flexibility"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Why Choose Us</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Why Choose <span className="text-blue-600">Noted Ad Digital</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Partner with us to unlock your brand's full potential through strategic, data-driven digital marketing solutions
          </p>
          
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  feature.featured 
                    ? 'lg:scale-105' 
                    : ''
                }`}
              >
                {/* Featured Badge */}
                {feature.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`
                  relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md 
                  transition-all duration-200 hover:-translate-y-1 
                  border-2 ${feature.featured ? 'border-blue-200' : 'border-gray-100'}
                  hover:border-blue-200 h-full
                `}>
                  
                  <div className="mb-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  {/* <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 text-lg">Join hundreds of successful businesses</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "500+", label: "Projects Completed" },
              { metric: "98%", label: "Client Retention" },
              { metric: "$5M+", label: "Revenue Generated" },
              { metric: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors duration-200 hover:shadow-lg mb-6">
              Get Started Today
            </button>
            
            <p className="text-gray-600 text-lg max-w-2xl mb-4">
              Ready to transform your digital presence? Let's create something amazing together.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}