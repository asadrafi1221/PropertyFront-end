import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
  text: string;
  children: React.ReactNode;
}

export function NavDropdown({ text, children }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group"
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <button className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium text-sm flex items-center">
        {text}
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
          {children}
        </div>
      )}
    </div>
  );
}