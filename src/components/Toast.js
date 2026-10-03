import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const getToastStyles = () => {
    const baseStyles = {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '16px 20px',
      borderRadius: '12px',
      color: '#fff',
      fontWeight: '600',
      fontSize: '0.95rem',
      zIndex: 10000,
      minWidth: '300px',
      maxWidth: '500px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      animation: 'slideInRight 0.3s ease-out',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    };

    switch (type) {
      case 'success':
        return { ...baseStyles, background: 'linear-gradient(135deg, #4caf50, #45a049)' };
      case 'error':
        return { ...baseStyles, background: 'linear-gradient(135deg, #f44336, #d32f2f)' };
      case 'warning':
        return { ...baseStyles, background: 'linear-gradient(135deg, #ff9800, #f57c00)' };
      default:
        return { ...baseStyles, background: 'linear-gradient(135deg, #2196f3, #1976d2)' };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✗';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  return (
    <>
      <div style={getToastStyles()}>
        <span style={{ fontSize: '1.2rem' }}>{getIcon()}</span>
        <span>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginLeft: 'auto',
            padding: '0 4px'
          }}
        >
          ×
        </button>
      </div>
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Toast;