import React from 'react';
import { Translations } from '../types/translations';

interface ProjectsProps {
  translations: Translations;
}

const Projects: React.FC<ProjectsProps> = ({ translations }) => {
  const projects = [
    {
      key: 'discord-bot-ai',
      preview: 'https://github.com/SamuelJedrzejewski/discord-bot-ai',
      download: 'https://github.com/SamuelJedrzejewski/discord-bot-ai',
    },
    {
      key: 'orvideos',
      preview: 'https://www.youtube.com/playlist?list=PLKjJoKBOdGJJJJJJJJJJJJJJJJJJJJJJJ',
      download: 'https://www.youtube.com/playlist?list=PLKjJoKBOdGJJJJJJJJJJJJJJJJJJJJJJJ',
    },
    {
      key: 'zombie-shooter',
      preview: 'https://github.com/SamuelJedrzejewski/zombie-shooter',
      download: 'https://github.com/SamuelJedrzejewski/zombie-shooter',
    },
  ];

  return (
    <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-code fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        {translations.projects.title}
      </h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index}>
            <h5>
              <b>{translations.projects[project.key as keyof typeof translations.projects].title}</b>
            </h5>
            <p>{translations.projects[project.key as keyof typeof translations.projects].desc}</p>
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="w3-button w3-light-grey w3-padding-large w3-section"
            >
              <i className="fa fa-eye"></i> {translations.projects.preview}
            </a>
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="w3-button w3-light-grey w3-padding-large w3-section"
            >
              <i className="fa fa-download"></i> {translations.projects.download}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;