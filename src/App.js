import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './containers/AboutMe';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Resume from './containers/Resume';

function App() {
  const [selected, setSelected] = useState('About Me');

  const renderContent = () => {
    switch (selected) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <Header />
      <Navigation selected={selected} setSelected={setSelected} />
      {renderContent()}
    </>
  );
}

export default App;
