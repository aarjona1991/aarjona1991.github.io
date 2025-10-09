import React, { useState } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: 'es' | 'en') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={`Change language to ${currentLanguage?.name}`}
        title={currentLanguage?.name}
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as 'es' | 'en')}
                className={`w-full flex items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  language === lang.code 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                title={lang.name}
                aria-label={`Switch to ${lang.name}`}
              >
                <span className="text-xl">{lang.flag}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { LanguageSwitcher };
