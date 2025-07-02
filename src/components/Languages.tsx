import React from 'react';
import { Translations } from '../types/translations';

interface LanguagesProps {
  translations: Translations;
}

const Languages: React.FC<LanguagesProps> = ({ translations }) => {
  const languages = [
    { name: translations.languages.pl, level: translations.languages.native },
    { name: translations.languages.en, level: 'B2' },
    { name: translations.languages.de, level: 'A1' },
    { name: translations.languages.fr, level: translations.languages.starter },
  ];

  return (
    <div className="w3-container">
      <h2>
        <i className="fa fa-globe fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        {translations.languages.title}
      </h2>
      {languages.map((language, index) => (
        <p key={index}>
          <i className="fa fa-fw w3-margin-right w3-large w3-text-teal"></i>
          {language.name}
          <span className="w3-right">{language.level}</span>
        </p>
      ))}
      <br />
    </div>
  );
};

export default Languages;