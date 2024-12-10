import React, { useState } from 'react';
import { Menu, X, Home, Building, Key, DollarSign, Users } from 'lucide-react';
import { Logo } from './Logo';
import { NavDropdown } from './NavDropdown';
import { DropdownItem } from './DropdownItem';
import { LanguageSelector } from './LanguageSelector';
import { UserMenu } from './UserMenu';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavDropdown text="Buy Properties">
              <DropdownItem
                icon={<Home />}
                text="Search Properties"
                description="Find your dream home"
              />
              <DropdownItem
                icon={<Building />}
                text="New Developments"
                description="Discover new building projects"
              />
            </NavDropdown>
            
            <NavDropdown text="Rent Properties">
              <DropdownItem
                icon={<Key />}
                text="Rental Search"
                description="Find properties for rent"
              />
              <DropdownItem
                icon={<Building />}
                text="Commercial Rentals"
                description="Office and retail spaces"
              />
            </NavDropdown>
            
            <NavDropdown text="Sell Property">
              <DropdownItem
                icon={<DollarSign />}
                text="Property Valuation"
                description="Get a free property valuation"
              />
              <DropdownItem
                icon={<Users />}
                text="Find an Agent"
                description="Connect with our experts"
              />
            </NavDropdown>
            
            <NavDropdown text="About Us">
              <DropdownItem
                text="Our Story"
                description="Learn about our company"
              />
              <DropdownItem
                text="Careers"
                description="Join our team"
              />
              <DropdownItem
                text="Contact"
                description="Get in touch with us"
              />
            </NavDropdown>
          </div>

          {/* Right Side Items */}
          <div className="hidden lg:flex items-center space-x-6">
            <LanguageSelector />
            <UserMenu />
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
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
}