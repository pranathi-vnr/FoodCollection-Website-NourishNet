import React from 'react';

function Map() {
    return (
        <div
            className='card bg-light'
            style={{
                backgroundColor: '#f4f4f4',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                width: '900px', // Set the width of the card
                maxWidth: '100%', // Keeps the card responsive
                margin: '30px auto', // Centers the card with some margin on top and bottom
                background: 'linear-gradient(135deg, #e9f5e9, #d3e6d3)',
                border: '1px solid #c4d3c4',
            }}
        >
            <center>
                <h2 style={{ color: 'rgb(34, 87, 34)', marginBottom: '20px' }}>
                    NourishNet Food Hub Centers
                </h2>
                <a
                    href="https://www.google.com/maps/@17.4970076,78.4067748,15z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    className='m-4'
                    style={{
                        textDecoration: 'none',
                        color: 'rgb(60, 87, 12)',
                        fontSize: '1.6rem',
                        display: 'block',
                        padding: '10px',
                        marginBottom: '10px',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'green')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgb(60, 87, 12)')}
                >
                    NourishNet Food Hub Center 1
                </a>
                <a
                    href="https://www.google.com/maps/@17.4996957,78.4353433,14z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    className='m-4'
                    style={{
                        textDecoration: 'none',
                        color: 'rgb(60, 87, 12)',
                        fontSize: '1.6rem',
                        display: 'block',
                        padding: '10px',
                        marginBottom: '10px',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'green')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgb(60, 87, 12)')}
                >
                    NourishNet Food Hub Center 2
                </a>
                <a
                    href="https://www.google.com/maps/@17.4873717,78.4594901,16z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    className='m-4'
                    style={{
                        textDecoration: 'none',
                        color: 'rgb(60, 87, 12)',
                        fontSize: '1.6rem',
                        display: 'block',
                        padding: '10px',
                        marginBottom: '10px',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'green')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgb(60, 87, 12)')}
                >
                    NourishNet Food Hub Center 3
                </a>
                <a
                    href="https://www.google.com/maps/@17.4970076,78.4067748,15z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    className='m-4'
                    style={{
                        textDecoration: 'none',
                        color: 'rgb(60, 87, 12)',
                        fontSize: '1.6rem',
                        display: 'block',
                        padding: '10px',
                        marginBottom: '10px',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'green')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgb(60, 87, 12)')}
                >
                    NourishNet Food Hub Center 4
                </a>
            </center>
        </div>
    );
}

export default Map;
