import React from 'react';

const InputGroup = () => {
  return (
    <div class='input-group mb-3'>
      <div class='input-group-prepend'> </div>
      <select class='custom-select' id='inputGroupSelect01'>
        <option selected>Choose...</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </div>
  );
};

export default InputGroup;
