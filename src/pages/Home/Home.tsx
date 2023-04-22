import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
          <div id="left">
            <Link to="/car">Car</Link>
            <br />
            <Link to="/remote">Remote</Link> <br />
          </div>
      </header>
    </div>
  );
}

export { Home };
