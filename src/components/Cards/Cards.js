import React from 'react'

const Cards = ({ results }) => {
  // console.log(results);

  let display;

  if(results){
  }
  else {
    display = 'No Characters Found!'
  }

  return <div className="col-4">{display}</div>
}

export default Cards
