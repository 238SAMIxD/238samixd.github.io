import React from 'react';
import { Translations } from '../types/translations';

interface HeaderProps {
  translations: Translations;
}

const Header: React.FC<HeaderProps> = ({ translations }) => {
  return (
    <header className="w3-container w3-center w3-margin-top">
      <img
        src="/img/Samuel.jpg"
        alt="Samuel Jędrzejewski"
        className="w3-circle w3-margin-bottom"
        style={{ width: '150px' }}
      />
      <h1 className="w3-text-white">Samuel Jędrzejewski</h1>
      <p className="w3-text-white w3-large">
        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {translations.info.looking}
      </p>
      <p className="w3-text-white">
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {translations.info.home}
      </p>
      <p className="w3-text-white">
        <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
        samuel.jedrzejewski.dev@gmail.com
      </p>
      <p className="w3-text-white">
        <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
        +48 510 405 888
      </p>
      <hr />
    </header>
  );
};

export default Header;