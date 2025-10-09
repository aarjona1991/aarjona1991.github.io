import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { personalInfo } from '../config/personalInfo';

// Import translations
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: esTranslations,
  en: enTranslations,
};

// Helper function to get nested object property
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return current[key];
    }
    return undefined;
  }, obj) || path; // Return the key if translation not found
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Get language from localStorage or use personal config default
        const savedLanguage = localStorage.getItem('portfolio-language') as Language;
        return savedLanguage || (personalInfo.defaultLanguage as Language) || 'en';
    });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Update meta description based on language
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        en: 'Frontend Developer specialized in React, TypeScript and modern web technologies. Creating exceptional digital experiences.',
        es: 'Desarrollador Frontend especializado en React, TypeScript y tecnologías web modernas. Creando experiencias digitales excepcionales.'
      };
      metaDescription.setAttribute('content', descriptions[lang]);
    }
  };

  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    return translation;
  };

  useEffect(() => {
    // Set initial document language
    document.documentElement.lang = language;
    
    // Set initial meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        en: 'Frontend Developer specialized in React, TypeScript and modern web technologies. Creating exceptional digital experiences.',
        es: 'Desarrollador Frontend especializado en React, TypeScript y tecnologías web modernas. Creando experiencias digitales excepcionales.'
      };
      metaDescription.setAttribute('content', descriptions[language]);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
