import React from 'react';
import logo from './logo.svg';
import './Home.scss';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
          <div id="left">
            <Link to="/">Home</Link>
            <Link to="/car">Car</Link>
            <Link to="/remote">Remote</Link>
          </div>
      </header>
    </div>
  );
}

export { Home };
