import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError(false);
      }, 3000);

      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/users/login', login)
      .then((response) => {
        console.log(response);
        navigateToDashboard();
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
      });

    setLogin({
      email: '',
      password: '',
    });
  };

  return (
    <>
      {loginError ? (
        <div className='alert alert-error'>Invalid email or password</div>
      ) : null}
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form
              onSubmit={handleSubmit}
              className='card-body'
            >
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  value={login.email}
                  onChange={handleChange}
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  value={login.password}
                  onChange={handleChange}
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <a
                    href='#'
                    className='label-text-alt link link-hover'
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
