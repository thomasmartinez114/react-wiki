import React from 'react';

const FilterBTN = ({ name, index, items }) => {
  return (
    <div>
      <div class='form-check'>
        <input
          class='form-check-input'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label class='btn btn-outline-primary' for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
