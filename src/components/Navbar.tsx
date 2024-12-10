import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, User } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://www.mcmakler.de/images/logos/mcmakler-logo.svg"
              alt="RealEstate Logo"
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavItem text="Buy Properties" />
            <NavItem text="Rent Properties" />
            <NavItem text="Sell Property" />
            <NavItem text="Rent Out Property" />
            <NavItem text="About Us" />
          </div>

          {/* Right Side Items */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="flex items-center text-gray-700 hover:text-red-600">
              <Globe className="h-5 w-5 mr-2" />
              <span>EN</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-red-600">
              <User className="h-5 w-5 mr-2" />
              <span>Login</span>
            </button>
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-md hover:bg-red-700 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavItem text="Buy Properties" />
            <MobileNavItem text="Rent Properties" />
            <MobileNavItem text="Sell Property" />
            <MobileNavItem text="Rent Out Property" />
            <MobileNavItem text="About Us" />
            <MobileNavItem text="Login" />
            <div className="px-4 py-2">
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium text-sm flex items-center"
    >
      {text}
      <ChevronDown className="h-4 w-4 ml-1" />
    </a>
  );
}

function MobileNavItem({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
    >
      {text}
    </a>
  );
}