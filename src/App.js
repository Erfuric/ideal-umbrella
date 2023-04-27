import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './containers/AboutMe';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Resume from './containers/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [selected, setSelected] = useState('About Me');

  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation selected={selected} setSelected={setSelected} />
        <main>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/about" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
