import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function moveToRegister() {
        navigate('/register');
    }

    function moveToLogin() {
        navigate('/login');
    }

    return (
        <div>
            <div className="top">
                <div className="overlay_text text-black ml-20px">
                    <h1>WELCOME!!</h1>
                    <h3>Be a part of our community.<br /> Let's work to fill the hungry stomachs</h3>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-4">
                    <div className="card" style={{ backgroundColor: 'rgb(40, 146, 40)', color: 'white' }}>
                        <div className="heading">
                            <center><h2 className='m-2'>Are you a donor?</h2></center>
                        </div>
                        <div className='card-body'>
                            <center>
                                <button className='btn mx-auto' style={{ color: 'white', borderBlockColor: 'white', fontSize: '1.5rem' }} onClick={moveToLogin}>Login</button>
                                <p>Are you a new user?</p>
                                <button className='btn mx-auto' style={{ color: 'white', borderBlockColor: 'white', fontSize: '1.5rem' }} onClick={moveToRegister}>Donor register</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ backgroundColor: 'rgb(255, 177, 33)', color: 'white' }}> {/* Corrected RGB value */}
                        <div className="heading">
                            <center><h2 className='m-2'>Are you a Receiver?</h2></center>
                        </div>
                        <div className='card-body'>
                            <center>
                                <button className='btn mx-auto' style={{ color: 'white', borderBlockColor: 'white', fontSize: '1.5rem' }} onClick={moveToLogin}>Login</button>
                                <p>Are you a new user?</p>
                                <button className='btn mx-auto' style={{ color: 'white', borderBlockColor: 'white', fontSize: '1.5rem' }} onClick={moveToRegister}>Receiver register</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ backgroundColor: 'rgb(67, 180, 67)', color: 'white' }}>
                        <div className="heading">
                            <center><h2 className='m-2'>Do you want to be a volunteer?</h2></center>
                        </div>
                        <div className='card-body'>
                            <center>
                                <button className='btn d-block mx-auto' style={{ color: 'white', borderBlockColor: 'white', fontSize: '1.5rem' }} onClick={moveToLogin}>Login</button>
                                <p>Are you a new user?</p>
                                <button className='btn mx-auto' style={{ color: 'white', borderBlockColor: 'white', fontSize: '1.5rem' }} onClick={moveToRegister}>Volunteer register</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
