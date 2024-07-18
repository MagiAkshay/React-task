import React from 'react';
import './CongratsCard.css';
import cardBg from './assets/congrats-card-bg.png';
import profileImg from './assets/congrats-card-profile-img.png';
import watchImg from './assets/congrats-card-watch-img.png';

function CongratsCard() {
  return (
    <div className="congrats-card" style={{ backgroundImage: `url(${cardBg})` }}>
      <h1>Congratulations</h1>
      <img src={profileImg} alt="Profile" className="profile-img" />
      <p className="name">Rahul Attuluri</p>
      <p className="description">Won the Best Student Award</p>
      <img src={watchImg} alt="Watch" className="watch-img" />
    </div>
  );
}

export default CongratsCard;
