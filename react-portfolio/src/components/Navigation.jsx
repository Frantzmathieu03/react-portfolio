import { useState } from 'react';

function Navigation({ setCurrentSection }) {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleClick = (section) => {
    setActiveSection(section);
    setCurrentSection(section);
  };

  return (
    <nav>
      <ul>
        {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
          <li key={section}>
            <button
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleClick(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
