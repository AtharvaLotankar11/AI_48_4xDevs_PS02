import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Bar with Shadowy Effect */}
      <nav className="bg-gradient-to-r from-white via-gray-50 to-indigo-50 shadow-xl fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                {/* AI Icon SVG */}
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text font-heading">
                  IntelliSupport
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium font-body transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium font-body transition-colors duration-200">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium font-body transition-colors duration-200">Contact Us</a>
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-md hover:from-indigo-700 hover:to-blue-700 font-body transition-all duration-200 shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 text-transparent bg-clip-text mb-4 font-heading">
                IntelliSupport: AI Sentinel of Knowledge
              </h1>
              <p className="text-lg text-gray-600 mb-6 font-body">
                Transform your enterprise support with our intelligent AI bots. Powered by real-time ERP integration, 
                self-learning capabilities, and multi-channel deployment, IntelliSupport delivers proactive, 
                personalized assistance 24/7.
              </p>
              <div className="space-x-4">
                <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-md hover:from-indigo-700 hover:to-blue-700 font-body transition-all duration-200 shadow-md">
                  Explore Features
                </button>
                <button className="border border-indigo-600 bg-gradient-to-r from-white to-indigo-50 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-100 font-body transition-all duration-200 shadow-sm">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="AI Support Illustration"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-indigo-800 text-transparent bg-clip-text mb-2 font-heading">Real-Time ERP Integration</h3>
              <p className="text-gray-600 font-body">
                Fetches live data from Sales, HR, and Finance modules via secure APIs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-indigo-800 text-transparent bg-clip-text mb-2 font-heading">Self-Learning AI</h3>
              <p className="text-gray-600 font-body">
                Continuously improves responses based on user interactions and analytics.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-indigo-800 text-transparent bg-clip-text mb-2 font-heading">Multi-Channel Support</h3>
              <p className="text-gray-600 font-body">
                Available on web, WhatsApp, Slack, Teams, and email.
              </p>
            </div>
          </div>

          {/* Sustainability Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg mt-12 shadow-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-900 to-blue-900 text-transparent bg-clip-text mb-4 font-heading">Green AI Innovation</h2>
            <p className="text-gray-700 mb-6 font-body">
              IntelliSupport optimizes energy-efficient AI processing, reducing carbon footprint while 
              maintaining top performance. Track sustainability metrics with our impact dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;