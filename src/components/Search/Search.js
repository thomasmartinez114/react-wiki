// rafc
import React from 'react';
import styles from './Search.module.scss';

export const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input
        onChange={e => {
          setPageNumber(1);
          setSearch(e.target.value); // will setSearch as what is typed
        }}
        placeholder='Search for Characters'
        type='text'
        className={styles.input}
      />
      <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
