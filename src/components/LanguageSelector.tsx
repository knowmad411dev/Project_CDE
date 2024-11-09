import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' }
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Globe className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium">
          {languages.find(l => l.code === currentLang)?.name}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {isLangOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsLangOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}