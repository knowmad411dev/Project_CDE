import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "It has been amazing. They support us and all our ideas when we need something from them. They have an amazing team, and we love to work with them.",
    author: "Nori Maldonado",
    role: "Workforce Development Coordinator, Camino"
  },
  {
    quote: "I absolutely love this organization and hope and pray I have the opportunity to either pay them back one day or pay it forward.",
    author: "Charlotte Resident",
    role: ""
  },
  {
    quote: "We appreciate the Center for Digital Equity for implementing digital inclusion efforts for the residents of Mecklenburg County and beyond.",
    author: "Annette Taylor",
    role: "Director, N.C. Department of Information Technology's Office of Digital Equity and Literacy"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">What Our Partners Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}