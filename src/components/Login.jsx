import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle form submission and verify user credentials
  async function handleFormSubmit(newUser) {
    const { username, password } = newUser;
    setLoading(true); // Set loading state

    try {
      const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
      const userObj = await response.json();

      if (userObj.length === 0) {
        setLoginErr({ message: "Username or password invalid" });
      } else {
        navigate('/receiver', { state: userObj[0] });
      }
    } catch (err) {
      setLoginErr({ message: "Network error" });
    } finally {
      setLoading(false); // Reset loading state
    }
  }

  return (
    <div className='row'>
      <div className='col-md-6'>
        {/* Optional content, e.g., an image or welcome message */}
      </div>
      <div className='col-md-6'>
        <div className="mt-4">
          <h1 className="display-3 text-center text-secondary">User Login</h1>
          
          {/* Display login error message if any */}
          {loginErr && <p className='text-danger fs-4 text-center'>{loginErr.message}</p>}

          {/* Login form */}
          <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
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
    </div>
  );
}

export default Login;
