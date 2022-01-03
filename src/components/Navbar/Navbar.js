import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='fs-3 ubuntu navbar-brand'>
        Rick & Morty <span className='text-primary'>WiKi</span>{' '}
      </Link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse justify-content-end' id='navbarNav'>
        <div className='navbar-nav'>
          <NavLink to='/' class='nav-link'>
            Characters
          </NavLink>
          <NavLink to='/episodes' class='nav-link'>
            Episodes
          </NavLink>
          <NavLink to='/location' class='nav-link'>
            Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
