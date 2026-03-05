
import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-leaf-dark to-leaf animate-fade-in">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">GrowSavvy</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#soil-crop" className="text-white hover:text-secondary transition-colors">
                  Soil & Crop Compatibility
                </a>
              </li>
              <li>
                <a href="#weather" className="text-white hover:text-secondary transition-colors">
                  Weather Updates
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
