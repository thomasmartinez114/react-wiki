import React, { useState, useEffect } from 'react';

const Episodes = () => {
  let [id, setID] = useState(1);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      console.log(data);
    })();
  }, [api]);
  return <div>The episodes are here.</div>;
};

export default Episodes;
