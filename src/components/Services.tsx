import React from 'react';
import { Building2, TrendingUp, Key, HeartHandshake, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Property Valuation",
    description: "Free professional valuation of your property by our experts.",
    link: "Get Free Valuation"
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Market Analysis",
    description: "Detailed analysis of current market conditions and price trends in your area.",
    link: "Request Market Report"
  },
  {
    icon: <Key className="h-10 w-10" />,
    title: "Sales Service",
    description: "Professional marketing and sale of your property at the best possible price.",
    link: "Learn More"
  },
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: "Personal Consultation",
    description: "Individual consultation with our experienced real estate experts.",
    link: "Schedule Appointment"
  }
];

export function Services() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From valuation to successful completion - we guide you through the entire process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-red-600 font-medium group-hover:text-red-700"
              >
                {service.link}
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}