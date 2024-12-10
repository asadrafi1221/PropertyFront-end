import React from 'react';
import { PropertyCard } from './PropertyCard';

const properties = [
  {
    id: 1,
    title: "Modern 3-Room Apartment with Balcony",
    location: "Berlin-Mitte",
    price: "$450,000",
    size: "95",
    rooms: "3",
    bathrooms: "1",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Luxurious Villa with Pool",
    location: "Hamburg-Blankenese",
    price: "$1,890,000",
    size: "280",
    rooms: "6",
    bathrooms: "3",
    type: "House",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Penthouse with Rooftop Terrace",
    location: "Munich-Schwabing",
    price: "$980,000",
    size: "150",
    rooms: "4",
    bathrooms: "2",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

export function FeaturedProperties() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked property listings in Germany's most desirable locations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
}