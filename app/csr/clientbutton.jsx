'use client'; // Add this to enforce client-side rendering

import React, { useState } from 'react';

const ClientButton = ({ children }) => {
  const [clicked, setClicked] = useState(false); // Add state to handle click feedback

  return (
    <button
      style={{
        backgroundColor: clicked ? '#4CAF50' : '#2E2E3A', // Change color when clicked
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0 0 0 3px #2E2E3A'
      }}
      onClick={() => {
        setClicked(!clicked); // Toggle clicked state
        alert('Button was clicked!'); // Show an alert when the button is clicked
      }}
      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #2E2E3A'}
      onBlur={(e) => e.target.style.boxShadow = 'none'}
    >
      {clicked ? 'Clicked!' : children} {/* Change text when clicked */}
    </button>
  );
};

export default ClientButton;
