import React from 'react';
import FilterBTN from '../FilterBTN';

const Status = () => {
  let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <div className='accordion-item'>
      <h2 class='accordion-header' id='headingThree'>
        <button
          class='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseThree'
          aria-expanded='false'
          aria-controls='collapseThree'
        >
          Status
        </button>
      </h2>
      <div
        id='collapseThree'
        class='accordion-collapse collapse'
        aria-labelledby='headingThree'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {status.map((items, index) => (
            <FilterBTN key={index} name='status' index={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
