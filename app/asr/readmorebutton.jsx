'use client'; // Add this to enforce client-side rendering

import React from 'react';

const ReadMoreButton = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
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
          boxShadow: '0 0 0 3px #2E2E3A', // Adds a custom dark blue outline on focus
          marginBottom: '5px' // Added margin for spacing before "Read more"
        }}
        onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px #2E2E3A'} // On focus, apply custom dark blue outline
        onBlur={(e) => e.target.style.boxShadow = 'none'}
      >
        {children}
      </button>
      {/* Adding Read More */}
      <a href="#" style={{ color: '#2E2E3A', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
        Read more <span style={{ marginLeft: '5px', fontSize: '14px' }}>→</span>
      </a>
    </div>
  );
};

export default ReadMoreButton;
