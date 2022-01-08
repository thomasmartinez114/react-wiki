import React from 'react';

const InputGroup = ({ total, name, setID }) => {
  return (
    <div class='input-group mb-3'>
      <select class='form-select' id='inputGroupSelect01'>
        <option selected>Choose...</option>
        {[...Array(total).keys()].map(episodeNumber => {
          return (
            <option value={episodeNumber + 1}>
              {name} - {episodeNumber + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
