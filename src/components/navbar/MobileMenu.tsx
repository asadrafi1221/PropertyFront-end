import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <MobileMenuItem text="Buy Properties" />
        <MobileMenuItem text="Rent Properties" />
        <MobileMenuItem text="Sell Property" />
        <MobileMenuItem text="Rent Out Property" />
        <MobileMenuItem text="About Us" />
        <hr className="my-2 border-gray-200" />
        <MobileMenuItem text="Login" />
        <div className="px-4 py-2">
          <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
    >
      <span>{text}</span>
      <ChevronRight className="h-5 w-5" />
    </a>
  );
}