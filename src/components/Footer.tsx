
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-leaf-dark text-white py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} GrowSavvy. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-secondary text-sm">Privacy Policy</a>
            <a href="#" className="text-white hover:text-secondary text-sm">Terms of Service</a>
            <a href="#" className="text-white hover:text-secondary text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
