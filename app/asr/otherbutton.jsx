'use client'; // Add this to enforce client-side rendering

import React from 'react';

const OtherButton = ({ children, icon, count, color }) => {
  return (
    <button
      style={{
        backgroundColor: '#F9FAFB',             // Light background
        color: '#2E2E3A',                       // Dark text
        padding: '10px 16px',                   // Adjusted padding for more space
        borderRadius: '25px',                   // Full round corners
        fontWeight: '500',                      // Medium font weight
        fontSize: '14px',                       // Slightly larger font size for better visibility
        border: '1px solid #E0E0E0',            // Light border for subtle outline
        cursor: 'pointer',
        display: 'flex',                        // Flexbox to align icon and text
        alignItems: 'center',
        justifyContent: 'center',               // Center both horizontally and vertically
        gap: '8px',                             // Slight spacing between icon and text
        outline: 'none',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',// Slight shadow for depth
        transition: 'background-color 0.2s ease',// Smooth hover effect
        minWidth: '130px',                      // Minimum width for consistency
        height: '40px',                         // Fixed height to ensure consistent sizing
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#EAEAEA'} // Slight darkening on hover
      onMouseOut={(e) => e.target.style.backgroundColor = '#F9FAFB'}
    >
      {icon && <span style={{ fontSize: '16px', color }}>{icon}</span>} {/* Slightly larger icon */}
      <span>{children}</span> {/* Center text properly */}
      {count && <span style={{ fontSize: '12px', backgroundColor: color, borderRadius: '50%', padding: '2px 6px', color: '#fff' }}>{count}</span>}
    </button>
  );
};

export default OtherButton;
