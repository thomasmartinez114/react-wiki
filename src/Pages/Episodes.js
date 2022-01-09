import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  // results should match what we used in App.js
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setInfo(data);

      // pull characters from episode
      let episodeCharacters = await Promise.all(
        data.characters.map(characterInfo => {
          return fetch(characterInfo).then(res => res.json());
        })
      );
      setResults(episodeCharacters);
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
        <h5 className='text-center mb-4'>
          Air Date {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-3'>
          <h4 className='text-center mb-4'>Pick Episodes</h4>
          <InputGroup setID={setID} name='Episode' total={51} />
        </div>
        <div className='col-8'>
          <div className='row'>
            <Cards page='/epsiodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
