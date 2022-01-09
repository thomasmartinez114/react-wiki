// rfac

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // if info exist, then show the pages
  let [width, setwidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setwidth(window.innerWidth);
  };

  console.log(width);

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .previous {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className='pagination justify-content-center gap-4 my-4'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel='Next >'
        previousLabel='< Prev'
        nextClassName='btn next'
        previousClassName='btn previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName='active'
        onPageChange={data => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
