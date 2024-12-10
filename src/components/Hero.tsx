import React, { useState } from 'react';
import { Search, MapPin, Euro, Home } from 'lucide-react';

export function Hero() {
  const [searchType, setSearchType] = useState('buy');

  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-100">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Modern building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-white mb-8">
            Germany's #1 for Commission-Free Real Estate
          </p>

          <div className="bg-white rounded-lg shadow-xl p-1">
            {/* Search Type Selector */}
            <div className="flex mb-4 p-2">
              <button
                onClick={() => setSearchType('buy')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium ${
                  searchType === 'buy'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium ${
                  searchType === 'rent'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Form */}
            <div className="flex flex-col md:flex-row gap-2 p-2">
              <div className="flex-1">
                <div className="flex items-center bg-gray-50 rounded-md p-3 hover:ring-2 hover:ring-red-600 focus-within:ring-2 focus-within:ring-red-600">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location or ZIP"
                    className="ml-2 bg-transparent w-full focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center bg-gray-50 rounded-md p-3 hover:ring-2 hover:ring-red-600 focus-within:ring-2 focus-within:ring-red-600">
                  <Home className="h-5 w-5 text-gray-400" />
                  <select className="ml-2 bg-transparent w-full focus:outline-none text-sm">
                    <option>All Property Types</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Land</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center bg-gray-50 rounded-md p-3 hover:ring-2 hover:ring-red-600 focus-within:ring-2 focus-within:ring-red-600">
                  <Euro className="h-5 w-5 text-gray-400" />
                  <select className="ml-2 bg-transparent w-full focus:outline-none text-sm">
                    <option>Any Price</option>
                    <option>Up to $100,000</option>
                    <option>Up to $200,000</option>
                    <option>Up to $500,000</option>
                  </select>
                </div>
              </div>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}