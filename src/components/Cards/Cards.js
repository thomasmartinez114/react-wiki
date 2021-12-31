import React from 'react'

const Cards = ({ results }) => {
  // console.log(results);

  let display;
  console.log(results);

  if(results){
    // results.map(x) will target each item of the object
    display = results.map(x => {
      // destructure the x
      let {id} = x
      return( <div key={id} className="col-4">gasfh</div> )
    });
  }
  else {
    display = 'No Characters Found!'
  }

  return <>{display}</>
}

export default Cards
