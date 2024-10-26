import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import register5 from "../assets/register5.png"
import register6 from "../assets/register6.jpg"
import register7 from "../assets/register7.jpg"

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
                    <h1>W E L C O M E</h1>
                    <h3>"Turn excess into impact. <br /> Share food, share hope."</h3>
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
                            <img src={register5} alt="Donor" style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }} />
                                <p>Are you a new user?</p>
                                <button className='btn mx-auto' style={{ color: 'white', border: '2px solid white', fontSize: '1.5rem' }} onClick={moveToRegister}>Donor register</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ backgroundColor:'#8FBC8B', color: 'white' }}> {/* Corrected RGB value */}
                        <div className="heading">
                            <center><h2 className='m-2'>Are you a Receiver?</h2></center>
                        </div>
                        <div className='card-body'>
                            <center>
                            <img src={register6} alt="Donor" style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }} />
                                <p>Are you a new user?</p>
                                <button className='btn mx-auto' style={{ color: 'white', border: '2px solid white', fontSize: '1.5rem' }} onClick={moveToRegister}>Receiver register</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ backgroundColor: 'rgb(40, 146, 40)', color: 'white' }}>
                        <div className="heading">
                            <center><h2 className='m-2'>Do you want to be a volunteer?</h2></center>
                        </div>
                        <div className='card-body'>
                            <center>
                            <img src={register7} alt="Donor" style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }} />
                                <p>Are you a new user?</p>
                                <button className='btn mx-auto' style={{ color: 'white', border: '2px solid white', fontSize: '1.5rem' }} onClick={moveToRegister}>Volunteer register</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
