import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <h1 className='fs-3 ubuntu navbar-brand'>
        Rick & Morty <span className='text-primary'>WiKi</span>{' '}
      </h1>
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
        <ul class='navbar-nav'>
          <li class='nav-item active'>
            <a class='nav-link' href='#'>
              Home
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Features
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Pricing
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link disabled' href='#'>
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
