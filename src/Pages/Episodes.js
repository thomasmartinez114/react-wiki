import React, { useState, useEffect } from 'react';

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setInfo(data);
    })();
  }, [api]);
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center mb-2'>
          {/* if name is blank then print Uknown, if not, put the Name */}
          Episode:{' '}
          <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center'>
          Air Date {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-3'>Pick Episodes</div>
        <div className='col-8'>
          <div className='row'>Cards are here</div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
