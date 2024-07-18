import React from 'react';
import './SuperOverLeague.css';
import rcbLogo from './assets/rcb-img.png';
import cskLogo from './assets/csk-img.png';

function SuperOverLeague() {
  return (
    <div className="super-over-league">
      <h1>Super Over League</h1>
      <div className="team-logos">
        <img src={rcbLogo} alt="RCB Logo" />
        <img src={cskLogo} alt="CSK Logo" />
      </div>
    </div>
  );
}

export default SuperOverLeague;
