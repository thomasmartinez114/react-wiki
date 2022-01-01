// rfac

import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // if info exist, then show the pages
  return (
  <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName='btn btn-primary'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      onPageChange={(data) => {
        console.log(data.selected);
      }}
      pageCount={info?.pages} />
  )
};

export default Pagination;
