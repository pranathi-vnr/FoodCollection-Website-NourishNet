import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(null);
  

  // Function to handle form submission and verify user credentials
  async function handleFormSubmit(newUser) {
    const { username, password } = newUser;
  
    fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(userObj => {
        if (userObj.length === 0) {
          setLoginErr({ message: "Username or password invalid" });
        } else {
          const user = userObj[0];
          console.log(user);
  
          switch (user.role) {
            case 'Volunteer':
              navigate('/volunteer', { state: user[0] });
              break;
            case 'Donor':
              navigate('/donater', { state: user[0] });
              break;
            case 'Receiver':
              navigate('/receiver', { state: user[0] });
              break;
            default:
              setLoginErr({ message: 'Invalid user role' });
          }
        }
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
        setLoginErr({ message: 'An error occurred. Please try again.' });
      });
  }

  return (
    <div >
     
      
        <div className="mt-4">
          
                    <h1 className="display-3 text-center text-secondary">
             Login
          </h1>
          
          {/* Display login error message if any */}
          {loginErr && <p className='text-danger fs-4 text-center'>{loginErr.message}</p>}

          {/* Login form */}
          <form
            className="w-50 mx-auto mt-5 p-4 bg-light"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {/* Username input */}
            <div className="mb-3">
              <label className="form-label" htmlFor="un">Username</label>
              <input
                type="text"
                {...register("username", { required: true })}
                id="un"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`} // Added Bootstrap invalid class
              />
              {errors.username && <p className='text-danger'>*Username is required</p>}
            </div>

            {/* Password input */}
            <div className="mb-3">
              <label className="form-label" htmlFor="pw">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="pw"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`} // Added Bootstrap invalid class
              />
              {errors.password && <p className='text-danger'>*Password is required</p>}
            </div>
            
            {/* Submit button */}
            <button className="btn btn-outline-info d-block mx-auto" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
            </button>
            
          </form>
        </div>    
      
    </div>
  );
}

export default Login;
