import React from 'react';
import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          {/* <Route exact path="/me" element={ <Me /> } />
          <Route path="/projects" element={ <Projects />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
