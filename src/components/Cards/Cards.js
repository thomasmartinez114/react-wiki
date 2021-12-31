import React from 'react'

const Cards = ({ results }) => {
  // console.log(results);

  let display;
  console.log(results);

  if(results){
    // results.map(x) will target each item of the object
    display = results.map(x => {
      // destructure the x
      let { id, name, image } = x
      return(
        
        <div key={id} className="col-4">
          <div className="">
            <img src={image} alt="" className="" />
          </div>
        </div>
      );
    });
  }
  else {
    display = 'No Characters Found!'
  }

  return <>{display}</>
}

export default Cards
