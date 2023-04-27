import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ selected, setSelected }) {
  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <nav className="navigation">
      <ul>
        <li className={selected === 'About Me' ? 'selected' : ''}>
          <Link to="/about" onClick={() => handleSelect('About Me')}>
            About Me
          </Link>
        </li>
        <li className={selected === 'Portfolio' ? 'selected' : ''}>
          <Link to="/portfolio" onClick={() => handleSelect('Portfolio')}>
            Portfolio
          </Link>
        </li>
        <li className={selected === 'Contact' ? 'selected' : ''}>
          <Link to="/contact" onClick={() => handleSelect('Contact')}>
            Contact
          </Link>
        </li>
        <li className={selected === 'Resume' ? 'selected' : ''}>
          <Link to="/resume" onClick={() => handleSelect('Resume')}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
