import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#181a2b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '4px solid #23244d',
        borderTop: '4px solid #7b61ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <div style={{
        color: '#7b61ff',
        fontSize: '1.2rem',
        fontWeight: '600',
        letterSpacing: '1px'
      }}>
        Loading Portfolio...
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;