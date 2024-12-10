import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DropdownItemProps {
  text: string;
  description?: string;
  icon?: React.ReactNode;
}

export function DropdownItem({ text, description, icon }: DropdownItemProps) {
  return (
    <a
      href="#"
      className="flex items-start px-4 py-3 hover:bg-gray-50 group/item"
    >
      {icon && <div className="text-red-600 mr-3 mt-1">{icon}</div>}
      <div>
        <div className="text-sm font-medium text-gray-900 group-hover/item:text-red-600">
          {text}
        </div>
        {description && (
          <div className="text-xs text-gray-500 mt-0.5">{description}</div>
        )}
      </div>
      <ChevronRight className="h-4 w-4 ml-auto text-gray-400 group-hover/item:text-red-600" />
    </a>
  );
}