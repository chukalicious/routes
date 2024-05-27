import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './registerForm';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    password: '',
  });
  console.log(registration);

  const { name, email, password } = registration;

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      navigate('/login');
    }

    dispatch(reset());
  }, [isSuccess, user, isError, dispatch, message, navigate]);

  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(register(user));
  };

  return (
    <RegisterForm
      registration={registration}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
