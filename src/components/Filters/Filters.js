import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  // Clear function to set all variables to empty and refresh page
  let clear = () => {
    setStatus('');
    setPageNumber('');
    setGender('');
    setSpecies('');
    window.location.reload(false);
  };

  return (
    <div className='col-3'>
      <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary text-decoration-underline mb-4'
      >
        Clear Filters
      </div>
      <div className='accordion' id='accordionExample'>
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
