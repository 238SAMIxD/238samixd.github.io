import { useState, useEffect } from 'react';
import { Language, Translations } from '../types/translations';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'pl' || saved === 'en') ? saved : 'en';
  });

  const [currentTranslations, setCurrentTranslations] = useState<Translations>(
    translations[currentLanguage]
  );

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    setCurrentTranslations(translations[currentLanguage]);
  }, [currentLanguage]);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return {
    currentLanguage,
    currentTranslations,
    changeLanguage,
  };
};