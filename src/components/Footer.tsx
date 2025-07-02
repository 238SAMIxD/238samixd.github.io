import React from 'react';
import { Translations } from '../types/translations';

interface FooterProps {
  translations: Translations;
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
  const socialLinks = [
    { icon: 'linkedin', url: 'https://linkedin.com/in/samueljedrzejewski' },
    { icon: 'github', url: 'https://github.com/SamuelJedrzejewski' },
    { icon: 'twitter', url: 'https://twitter.com/samueljedrzejewski' },
    { icon: 'youtube', url: 'https://youtube.com/samueljedrzejewski' },
  ];

  return (
    <footer className="w3-container w3-teal w3-center w3-margin-top">
      <p>{translations.socialmedia}</p>
      <div className="w3-row w3-center">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w3-button w3-light-grey w3-margin"
          >
            <i className={`fa fa-${link.icon}`}></i>
          </a>
        ))}
      </div>
      <p>{translations.website}</p>
      <p>Powered by React & TypeScript</p>
    </footer>
  );
};

export default Footer;