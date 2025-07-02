import React from 'react';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="stack">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="logo product"
          style={{ backgroundImage: `url(/img/logos/${tech.toLowerCase()}.svg)` }}
          data-title={tech}
        />
      ))}
    </div>
  );
};

export default TechStack;