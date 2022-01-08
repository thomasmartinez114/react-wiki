import React from 'react';

const InputGroup = ({ total }) => {
  console.log([...Array(total).keys()]);
  return (
    <div class='input-group mb-3'>
      <select class='form-select' id='inputGroupSelect01'>
        <option selected>Choose...</option>
      </select>
    </div>
  );
};

export default InputGroup;
