import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';
import Skills from './components/Skills';
import Languages from './components/Languages';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { currentLanguage, currentTranslations, changeLanguage } = useLanguage();

  return (
    <div className="w3-light-grey">
      <LanguageSwitcher
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      
      {/* Page Container */}
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container dark-bg">
                <Header translations={currentTranslations} />
              </div>
              <Skills translations={currentTranslations} />
              <Languages translations={currentTranslations} />
            </div>
          </div>

          {/* Right Column */}
          <div className="w3-twothird">
            <WorkExperience translations={currentTranslations} />
            <Education translations={currentTranslations} />
            <Projects translations={currentTranslations} />
            <Footer translations={currentTranslations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;