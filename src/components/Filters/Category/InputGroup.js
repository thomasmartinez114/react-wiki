import React from 'react';

const InputGroup = ({ total, name, setID }) => {
  return (
    <div class='input-group mb-3'>
      <select
        onChange={e => setID(e.target.value)}
        class='form-select'
        id={name}
      >
        <option value='1' selected>
          Choose...
        </option>
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
