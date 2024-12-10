import React from 'react';
import { MapPin, Euro, Maximize, BedDouble, Bath } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    size: string;
    rooms: string;
    bathrooms: string;
    image: string;
    type: string;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            <span>{property.size} m²</span>
          </div>
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            <span>{property.rooms} Rooms</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} Bath</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-red-600 font-semibold">
            <Euro className="h-5 w-5 mr-1" />
            {property.price}
          </div>
          <button className="text-red-600 font-medium hover:text-red-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}