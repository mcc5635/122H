'use client'; // Add this to enforce client-side rendering

import React from 'react';

const ClientButton = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: '#2E2E3A',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        outline: 'none', // Removes default outline
        boxShadow: '0 0 0 3px #2E2E3A' // Adds a custom dark blue outline on focus
      }}
      onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #2E2E3A'} // On focus, apply custom dark blue outline
      onBlur={(e) => e.target.style.boxShadow = 'none'}
    >
      {children}
    </button>
  );
};

export default ClientButton;
