import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">RealEstate</h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Properties</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Buy Property</a></li>
              <li><a href="#" className="hover:text-white">Sell Property</a></li>
              <li><a href="#" className="hover:text-white">Rent Property</a></li>
              <li><a href="#" className="hover:text-white">Property Management</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}