// rfac

import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // if info exist, then show the pages
  return <ReactPaginate pageCount={info?.pages} />;
};

export default Pagination;
