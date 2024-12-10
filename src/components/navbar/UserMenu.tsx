import React, { useState } from 'react';
import { User } from 'lucide-react';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-700 hover:text-red-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-5 w-5 mr-2" />
        <span>Login</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
          >
            Sign In
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
          >
            Create Account
          </a>
          <hr className="my-1" />
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
          >
            My Properties
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
          >
            Saved Searches
          </a>
        </div>
      )}
    </div>
  );
}