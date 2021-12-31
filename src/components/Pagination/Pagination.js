// rfac

import React from 'react';

const Pagination = ({ setPageNumber }) => {
  let next = () => {
    setPageNumber(x => x + 1); // page count will increment by 1
  };

  let prev = () => {
    setPageNumber(x => x - 1);
  };

  return (
    <div>
      <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className='btn btn-primary'>
          Prev
        </button>
        <button onClick={next} className='btn btn-primary'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
