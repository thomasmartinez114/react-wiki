import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='fs-3 ubuntu navbar-brand'>
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
        <style jsx>
          {`
            button[aria-expanded='false'] > .close {
              display: none;
            }

            button[aria-expanded='true'] > .open {
              display: none;
            }
          `}
        </style>

        <i class='fas fa-bars open fw-bold text-dark'></i>
        <i class='fas fa-times close fw-bold text-dark'></i>
      </button>
      <div class='collapse navbar-collapse justify-content-end' id='navbarNav'>
        <div className='navbar-nav fs-5'>
          <NavLink to='/' className='nav-link'>
            Characters
          </NavLink>
          <NavLink to='/episodes' className='nav-link'>
            Episodes
          </NavLink>
          <NavLink to='/location' className='nav-link'>
            Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
