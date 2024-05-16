import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginContainer = () => {
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
    <LoginForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      login={setLogin}
      loginError={loginError}
    />
  );
};

export default LoginContainer;
