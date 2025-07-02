import React from 'react';
import { Translations } from '../types/translations';
import TechStack from './TechStack';

interface WorkExperienceProps {
  translations: Translations;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ translations }) => {
  const workItems = [
    {
      key: 'honeywell',
      period: '2024 - ' + translations.current,
      company: 'honeywell.png',
      technologies: ['js', 'ts', 'react', 'html', 'css'],
    },
    {
      key: 'kp',
      period: '2024 - ' + translations.current,
      company: 'kp.png',
      technologies: ['html', 'css', 'js'],
    },
    {
      key: 'esa',
      period: '2024',
      company: 'esa.png',
      technologies: ['obs'],
    },
    {
      key: 'statscore',
      period: '2024',
      company: 'statscore.png',
      technologies: [],
    },
    {
      key: 'realme',
      period: '2024',
      company: 'realme.jpg',
      technologies: [],
    },
    {
      key: 'carrier',
      period: '2022 - 2024',
      company: 'carrier.jpg',
      technologies: ['js', 'ts', 'react', 'html', 'css'],
    },
  ];

  return (
    <div className="w3-container" id="work">
      <h2 className="w3-text-light-grey w3-padding-16">
        <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        {translations.work.title}
      </h2>
      {workItems.map((item, index) => (
        <div key={index} className="w3-container">
          <h5 className="w3-opacity">
            <b>{translations.work[item.key as keyof typeof translations.work].title}</b>
          </h5>
          <h6 className="w3-text-teal">
            <i className="fa fa-calendar fa-fw w3-margin-right"></i>
            {item.period}
          </h6>
          <p>{translations.work[item.key as keyof typeof translations.work].desc}</p>
          {item.technologies.length > 0 && (
            <>
              <p className="text-small">
                <b>{translations.work.stack}</b>
              </p>
              <TechStack technologies={item.technologies} />
            </>
          )}
          <div className="company">
            <img
              src={`/img/${item.company}`}
              alt={translations.work[item.key as keyof typeof translations.work].name}
              style={{ width: '100%' }}
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;