import React from 'react';
import { Language } from '../types/translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="change">
      <div
        className={`flag pl ${currentLanguage === 'pl' ? 'highlight' : ''}`}
        onClick={() => onLanguageChange('pl')}
      >
        <div className="stripe white"></div>
        <div className="stripe red"></div>
      </div>
      <div
        className={`flag uk ${currentLanguage === 'en' ? 'highlight' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        <div className="back blue"></div>
        <div className="cross white"></div>
        <div className="left-top-left-triangle red"></div>
        <div className="left-top-right-triangle red"></div>
        <div className="right-top-left-triangle red"></div>
        <div className="right-top-right-triangle red"></div>
        <div className="right-bottom-right-triangle red"></div>
        <div className="right-bottom-left-triangle red"></div>
        <div className="left-bottom-left-triangle red"></div>
        <div className="left-bottom-right-triangle red"></div>
        <div className="left-bottom-diagonal red"></div>
        <div className="left-top-diagonal red"></div>
        <div className="right-top-diagonal red"></div>
        <div className="right-bottom-diagonal red"></div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;