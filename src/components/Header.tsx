import React from 'react';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://6276057.fs1.hubspotusercontent-na1.net/hub/6276057/hubfs/CDE%20Marketing%20Assets/CDE%20Logos/CDE%20Logo%20(Orange%20%26%20White).png" 
              alt="CDE Logo"
              className="h-8"
            />
          </div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}