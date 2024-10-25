import React from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

import register2 from '../assets/register2.jpg'
function Register() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const navigate=useNavigate();
  const [err,setErr]=useState(null)

  function handleFormSubmit(newUser){
    //make HTTP POST req
    fetch('http://localhost:3000/users',
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newUser)
        }).then(res=>{
           if(res.status===201){
              navigate('/login')
           }else{
              setErr({message:res.message})
           }
        }).catch(err=>setErr(err));
  }

  return (
    <div className='row'>
      <div className='col-md-6'>
        <img src={register2} alt="" style={{width:'600px'}} />
        </div>  

        <div className='col-md-6 mt-5'>
          
          <form className="w-75 mx-auto mt-5 p-5 rounded"
        onSubmit={handleSubmit(handleFormSubmit)} >
          <div className="mb-3">
            {/*username */}
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input
            type="text"
          {...register("username",{required:true,minLength:8})}
            id="un"
            className="form-control"
          />
          {errors.username?.type==='required' && <p className='text-danger pt-1' >*Username is required</p> }
          {errors.username?.type==='minLength'&& <p className='text-danger pt-1'>*minlength 8</p> }
        </div>
        {/* password */}
        <div className="mb-3">
          <label className="form-label" htmlFor="pw">
            Password
          </label>
          <input
            type="password"
            {...register("password",{register:true})}
            id="pw"
            className="form-control"
          />
               {errors.password?.type==='required' && <p className='text-danger' >*Password is required</p> }
        </div>
        {/* email */}
        <div className="mb-3">
          <label className="form-label" htmlFor="em">
            Email
          </label>
          <input
            type="email"
            {...register("email",{register:true})}
            id="em"
            className="form-control"
          />
               {errors.email?.type==='required' && <p className='text-danger' >*Email is required</p> }
        </div>
        {/* date of birth */}
        <div className="mb-3">
          <label className="form-lable" htmlFor="db">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob",{register:true})}
            id="db"
            className="form-control"
          />
               {errors.dob?.type==='required' && <p className='text-danger' >*dob is required</p> }
        </div>
        {/* select what you want to be */}
        <div className="mt-5">
          <label htmlFor="ch" className="form-lable">Choose your role</label>
          <select  id="ch">
          <option value="select" selected disabled hidden>select</option>
              <option value="Donor">Donor</option>
              <option value="Receiver">Receiver</option>
              <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        {/* submit button */}
        <center><button className="mt-4 btn btn-rounded mx-auto" style={{backgroundColor:'rgb(208, 240, 192)',fontSize:'1.5rem'}} type="submit">
          Register
        </button></center>
          </form>
          </div>    
    </div>
  )
}

export default Register