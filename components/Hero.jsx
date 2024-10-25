import React from 'react';
import ClientButton from './clientbutton';

const Hero = () => (
  <div className="hero my-3 text-center" data-testid="hero">
    <h1 className="mb-1" data-testid="hero-title">
      122 Health
    </h1>

    <p className="lead mb-2" data-testid="hero-lead" style={{ marginBottom: '10px' }}>
      Understand your health better
    </p>
    
    <a href="https://buy.stripe.com/fZeg0tfR54t47yEeUU" target="_blank" rel="noopener noreferrer">
      <ClientButton style={{ marginTop: '60px' }}>Sign Up</ClientButton>
    </a>
  </div>
);

export default Hero;
