// rafc
import React from 'react';
import styles from './Search.module.scss';

export const Search = () => {
  return (
    <form className=''>
      <input placeholder='Search for Characters' type='text' className='' />
      <button className='btn btn-primary'>Search</button>
    </form>
  );
};

export default Search;
