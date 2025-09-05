import React from "react";
import LeadCaptureForm from "../components/LeadCapture";

const Closing = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start Building a Stronger Digital Presence Today
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Whether you are exploring digital marketing for the first time or
          looking to scale existing campaigns, we are here to guide you with a
          clear strategy and measurable results. Share your requirements through
          the form or schedule a call to get started.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Share Your Requirements button opens form */}
          <a
            href="LeadCaptureForm"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Share Your Requirements
          </a>

          {/* Schedule a Call button */}
          <a
            href="tel:+919781043441"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-50 transition"
          >
            Schedule a Call
          </a>
        </div>

      </div>
    </section>
  );
};

export default Closing;
