import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, logout } from '../../features/auth/authSlice';

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoding, isError, isSuccess, message } = useSelector(
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
  }, [isError, message]);

  const handleLogout = () => {
    console.log('Logout button clicked');
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className='btn btn-square btn-ghost mr-2'
    >
      Logout
    </button>
  );
};

export default LogoutButton;
