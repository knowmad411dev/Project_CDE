import React from 'react';
import { FileText, Calendar, BookOpen, Download } from 'lucide-react';

const resources = [
  {
    title: "Charter",
    icon: FileText,
    url: "https://6276057.fs1.hubspotusercontent-na1.net/hubfs/6276057/Partner%20Engagement/CDE_CommunityCouncil_Charter.pdf"
  },
  {
    title: "Policy Agenda",
    icon: BookOpen,
    url: "https://thecenterfordigitalequity.org/wp-content/uploads/2024/02/102723_v2_PEOPLE_POLICY_AGENDA.pdf"
  },
  {
    title: "5-Year Plan",
    icon: FileText,
    url: "https://thecenterfordigitalequity.org/wp-content/uploads/2024/07/CDE_5Year_07302024.pdf"
  },
  {
    title: "Event Calendar",
    icon: Calendar,
    url: "https://thecenterfordigitalequity.org/calendar/"
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Partner Resources</h2>
          <p className="mt-4 text-xl text-gray-600">Access our library of resources to support your digital equity journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <resource.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
              <Download className="h-5 w-5 text-gray-400 mt-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}