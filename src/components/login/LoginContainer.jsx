import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';

const LoginContainer = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  console.log('LoginContainer: loginForm: ', loginForm);

  const { email, password } = loginForm;

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      navigateToDashboard();
    }

    dispatch(reset());
  }, [isSuccess, user, isError, dispatch, message, navigateToDashboard]);

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  return (
    <LoginForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loginForm={loginForm}
    />
  );
};

export default LoginContainer;
