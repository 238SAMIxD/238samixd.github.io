import React from 'react';
import { Translations } from '../types/translations';

interface SkillsProps {
  translations: Translations;
}

const Skills: React.FC<SkillsProps> = ({ translations }) => {
  const skills = [
    { name: 'Adobe Photoshop', level: 80 },
    { name: 'Photography', level: 75 },
    { name: 'Illustrator', level: 50 },
    { name: 'Media', level: 90 },
  ];

  return (
    <div className="w3-container">
      <h2>
        <i className="fa fa-asterisk fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        {translations.skills.title}
      </h2>
      {skills.map((skill, index) => (
        <div key={index} className="w3-light-grey w3-round-xlarge w3-small">
          <div
            className="w3-container w3-center w3-round-xlarge w3-teal"
            style={{ width: `${skill.level}%` }}
          >
            {skill.level}%
          </div>
        </div>
      ))}
      <br />
      <p>
        <i className="fa fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {translations.skills.driver_licence}
      </p>
      <p>
        <i className="fa fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {translations.skills.pentesting}
      </p>
      <p>
        <i className="fa fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {translations.skills.cpr}
      </p>
      <p>
        <i className="fa fa-fw w3-margin-right w3-large w3-text-teal"></i>
        {translations.skills.learning}
      </p>
      <br />
    </div>
  );
};

export default Skills;