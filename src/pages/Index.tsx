
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SoilCropChecker from '@/components/SoilCropChecker';
import WeatherDisplay from '@/components/WeatherDisplay';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-leaf to-leaf-dark text-white py-16">
          <div className="soil-pattern absolute inset-0 opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Grow Smarter with GrowSavvy</h1>
              <p className="text-lg md:text-xl mb-8">
                Find the perfect crop for your soil and stay updated with real-time weather conditions
                to optimize your gardening and farming success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#soil-crop" 
                  className="bg-white text-leaf-dark hover:bg-secondary transition-colors px-6 py-3 rounded-lg font-medium"
                >
                  Check Soil Compatibility
                </a>
                <a 
                  href="#weather" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors px-6 py-3 rounded-lg font-medium"
                >
                  View Weather Updates
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How GrowSavvy Helps You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-soil rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Soil Analysis</h3>
                <p className="text-muted-foreground">
                  Understand your soil type and its characteristics to make informed planting decisions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-leaf rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Crop Compatibility</h3>
                <p className="text-muted-foreground">
                  Match the right crops to your soil type for optimal growth and yield.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-sky rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Updates</h3>
                <p className="text-muted-foreground">
                  Stay informed about current and forecasted weather conditions to protect your crops.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Soil Crop Checker Section */}
        <SoilCropChecker />
        
        {/* Weather Display Section */}
        <WeatherDisplay />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
