import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
          <div id="left">
            <Link to="/">Home</Link>
            <br />
            <Link to="/car">Car</Link>
            <br />
            <Link to="/remote">Remote</Link>
          </div>
      </header>
    </div>
  );
}

export { Home };
