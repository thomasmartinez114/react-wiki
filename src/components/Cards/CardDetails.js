import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  console.log(fetchedData);

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    // IIFE (Immediately Invoked Func. Exp.)
    (async function () {
      let data = await fetch(api).then(res => res.json());
      // console.log(data.results);
      updateFetchedData(data);
    })();
  }, [api]);

  return <div>The details of the card are here - {id}</div>;
};

export default CardDetails;
