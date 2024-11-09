import React from 'react';

export default function Hero() {
  return (
    <section id="why-partner" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Creating Digital Equity Together</h1>
            <p className="text-xl mb-8">Join our ecosystem of partners working to bridge the digital divide and create opportunities for all.</p>
            <a 
              href="#join-us"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Become a Partner
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Digital Equity"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}