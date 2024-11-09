import React from 'react';
import { Users, Lightbulb, Award } from 'lucide-react';

const tiers = [
  {
    title: 'EXPLORER',
    icon: Users,
    description: 'Perfect for those looking to gain insights into digital inclusion and share perspectives with a diverse community.',
    benefits: [
      'Access to the digital equity ecosystem community',
      'Opportunities to develop partnerships',
      'Benefit from CDE\'s digital navigator service'
    ]
  },
  {
    title: 'INNOVATOR',
    icon: Lightbulb,
    description: 'Engage with our network to foster connections and strengthen your digital inclusion efforts.',
    benefits: [
      'All Explorer benefits',
      'Influence co-created solutions and long-term strategies',
      'Access to development opportunities',
      'CDE support in aligning digital equity efforts'
    ]
  },
  {
    title: 'CHAMPION',
    icon: Award,
    description: 'Join the leading partners making a significant impact by contributing generously to our mission.',
    benefits: [
      'All Innovator benefits',
      'Access to custom marketing materials',
      'Eligibility for stipends or direct investments',
      'Professional consulting opportunities',
      'Grant application support'
    ]
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Partner Tiers</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the partnership level that best fits your organization</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.title} className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <tier.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-center text-gray-900">{tier.title}</h3>
              <p className="mt-4 text-gray-600 text-center">{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shrink-0">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}