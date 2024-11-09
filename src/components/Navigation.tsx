import React from 'react';

const navItems = ['Why Partner', 'Benefits', 'Resources', 'Join Us'];

export default function Navigation() {
  return (
    <nav className="bg-white border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}