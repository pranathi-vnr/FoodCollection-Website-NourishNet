import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#e8f5e9', // Light green background
            color: '#2e7d32', // Darker green for text
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div style={{ marginBottom: '20px' }}>
                <img
                    src="https://via.placeholder.com/150?text=Thank+You!"
                    alt="Thank You Icon"
                    style={{
                        width: '150px',
                        height: '150px',
                        marginBottom: '20px',
                        borderRadius: '50%',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#a5d6a7' // Subtle green background for the image
                    }}
                />
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Thank You!</h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '500px', lineHeight: '1.6' }}>
                Congratulations on making a difference! Your generous food donation will help provide meals to those in need.
                We appreciate your kindness and thoughtfulness.
            </p>
            <button
                onClick={handleReturnHome}
                style={{
                    marginTop: '30px',
                    padding: '10px 20px',
                    backgroundColor: '#66bb6a', // Green color for the button
                    color: '#fff',
                    fontSize: '1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#43a047'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#66bb6a'}
            >
                Return to Home
            </button>
        </div>
    );
}

export default ThankYou;
