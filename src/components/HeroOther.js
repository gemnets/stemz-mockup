import React from 'react';
import './HeroOther.css';

const HeroOther = ({ title }) => {
  return (
    <div className="hero-other">
      <h1 className="hero-other-title">{title}</h1>
    </div>
  );
};

export default HeroOther;
