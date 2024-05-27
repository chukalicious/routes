import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaPeopleLine } from 'react-icons/fa6';
import LogoutButton from '../components/Logout/LogoutButton';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost text-xl'
        >
          Joiners{' '}
          <span className='text-3xl'>
            <FaPeopleLine />
          </span>
        </Link>
      </div>
      <div className='flex-none'>
        <Link to='/login'>
          <button className='btn btn-square btn-ghost mr-2'>
            <FaArrowRightFromBracket />
          </button>
        </Link>

        <LogoutButton />

        <Link to='/register'>
          <button className='btn btn-square btn-ghost mr-2'>
            <FaRegCircleUser />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
