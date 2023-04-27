import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './containers/AboutMe';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Resume from './containers/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selected, setSelected] = useState('About Me');

  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation selected={selected} setSelected={setSelected} />
        <main>
          <Routes>
            <Route exact path="/" element={AboutMe} />
            <Route path="/about" element={AboutMe} />
            <Route path="/portfolio" element={Portfolio} />
            <Route path="/contact" element={Contact} />
            <Route path="/resume" element={Resume} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
