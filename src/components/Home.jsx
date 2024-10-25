import React from 'react'
import './home.css'
import {useNavigate} from 'react-router-dom';
function Home() {
    const navigate=useNavigate();
    function moveToRegister(){
        navigate('/register')
    }
    function moveToLogin(){
      navigate('/login')
  }
  return (
    <div >
        <div className="top  " >
           
       <div className='overlay_text text-black'>
       <h1 >Welcome to Nourish Net</h1>
       <h3>Be a part of our community. Let's work to fill the hungry stomachs</h3>
       </div>
        </div>


       <div class="row justify-content-center mt-4" >
         <div class="col-md-4">
          <div class="card " style={{backgroundColor:'rgb(40, 146, 40)',color:'white'}}>
          <div class="heading ">
                    <center><h2 className='m-2'>Are you a donor ?</h2></center>
             </div>
             <div className='card-body'>
              <center>
                <button className='btn  mx-auto' style={{color:'white',borderBlockColor:'white',fontSize:'1.5rem'}} onClick={moveToLogin}>Login</button>
                <p>Are you a new user</p>
                <button className='btn  mx-auto' style={{color:'white',borderBlockColor:'white',fontSize:'1.5rem'}} onClick={moveToRegister}>Donor register</button>

              </center>
             </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="card" style={{backgroundColor:'rgb(255, 177, 33)',color:'white'}}>
          <div class="heading">
                    <center><h2 className='m-2'>Are you a Receiver ?</h2></center>
             </div>
             <div className='card-body'>
              <center>
                <button className='btn   mx-auto' style={{color:'white',borderBlockColor:'white',fontSize:'1.5rem'}} onClick={moveToLogin}>Login</button>
                <p>Are you a new user</p>
                <button className='btn mx-auto' style={{color:'white',borderBlockColor:'white',fontSize:'1.5rem'}} onClick={moveToRegister}>Receiver register</button>

              </center>
             </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="card" style={{backgroundColor:'rgb(67,180,67)',color:'white'}} >
          <div class="heading">
                    <center><h2 className='m-2'>Do you want to be a volunteer ?</h2></center>
             </div>
             <div className='card-body'>
              <center>
                <button className='btn d-block mx-auto' style={{color:'white',borderBlockColor:'white',fontSize:'1.5rem'}} onClick={moveToLogin}>Login</button>
                <p>Are you a new user</p>
                <button className='btn  mx-auto' style={{color:'white',borderBlockColor:'white',fontSize:'1.5rem'}} onClick={moveToRegister}>Volunteer register</button>

              </center>
             </div>
          </div>
         </div>
       </div>
        
    </div>
  )
}

export default Home;