import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  // Setters for the pageNumber, serach, status, gender and species
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState('');
  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');

  let [fetchedData, updateFetchedData] = useState([]);
  // this will destructure the api data to grab info and results data
  let { info, results } = fetchedData;

  // console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    // IIFE (Immediately Invoked Func. Exp.)
    (async function () {
      let data = await fetch(api).then(res => res.json());
      // console.log(data.results);
      updateFetchedData(data);
    })();
  }, [api]); /* [api] is a watch variable */

  return (
    <div className='App'>
      <h1 className='text-center ubuntu my-4'>
        Rick & Morty <span className='text-primary'>WiKi</span>{' '}
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          {/* filter for the status and set the page back to 1 */}
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
