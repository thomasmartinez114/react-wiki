import React from 'react'

const Cards = ({ results }) => {
  // console.log(results);

  let display;
  console.log(results);

  if(results){
    // results.map(x) will target each item of the object
    display = results.map(x => {
      // destructure the x
      let { id, name } = x
      return( <div key={id} className="col-4">
        {name}
      </div> )
    });
  }
  else {
    display = 'No Characters Found!'
  }

  return <>{display}</>
}

export default Cards
