import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'DE', name: 'Deutsch' },
  { code: 'ES', name: 'Español' }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-700 hover:text-red-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-5 w-5 mr-2" />
        <span>{selectedLang}</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
              onClick={() => {
                setSelectedLang(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}