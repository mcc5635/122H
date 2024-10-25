'use client'; // Add this to enforce client-side rendering

import React from 'react';

const BiomarkerButton = ({ children, icon, count, color }) => {
  return (
    <button
      style={{
        backgroundColor: '#F9FAFB',           // Light background
        color: '#2E2E3A',                     // Dark text
        padding: '10px 16px',                 // Smaller padding for a compact look
        borderRadius: '25px',                 // Full round corners
        fontWeight: '500',                    // Medium font weight
        fontSize: '14px',                     // Smaller font size
        border: '1px solid #E0E0E0',          // Light border for subtle outline
        cursor: 'pointer',
        display: 'flex',                      // Flexbox to align icon and text
        alignItems: 'center',
        gap: '8px',                           // Spacing between icon and text
        outline: 'none',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)', // Slight shadow for depth
        transition: 'background-color 0.2s ease', // Smooth hover effect
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'} // Slight darkening on hover
      onMouseOut={(e) => e.target.style.backgroundColor = '#F9FAFB'}
    >
      {/* Render an icon if passed as a prop */}
      {icon && <span style={{ fontSize: '16px', color }}>{icon}</span>}
      {children}
      {/* Render a count indicator if passed as a prop */}
      {count && <span style={{ fontSize: '12px', backgroundColor: color, borderRadius: '50%', padding: '2px 8px', color: '#fff' }}>{count}</span>}
    </button>
  );
};

export default BiomarkerButton;
