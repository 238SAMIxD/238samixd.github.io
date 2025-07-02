import React from 'react';
import { Translations } from '../types/translations';

interface EducationProps {
  translations: Translations;
}

const Education: React.FC<EducationProps> = ({ translations }) => {
  const educationItems = [
    {
      key: 'xamk',
      period: '2022',
      logo: 'xamk.jpg',
    },
    {
      key: 'pg',
      period: '2020 - ' + translations.current,
      logo: 'pg.jpg',
    },
    {
      key: 'highschool',
      period: '2017 - 2020',
      logo: 'malach.jpg',
    },
  ];

  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        {translations.edu.title}
      </h2>
      {educationItems.map((item, index) => (
        <div key={index} className="w3-container">
          <h5 className="w3-opacity">
            <b>{translations.edu[item.key as keyof typeof translations.edu].title}</b>
          </h5>
          <h6 className="w3-text-teal">
            <i className="fa fa-calendar fa-fw w3-margin-right"></i>
            {item.period}
          </h6>
          <p>{translations.edu[item.key as keyof typeof translations.edu].desc}</p>
          <div className="company">
            <img
              src={`/img/${item.logo}`}
              alt={translations.edu[item.key as keyof typeof translations.edu].title}
              style={{ width: '100%' }}
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Education;