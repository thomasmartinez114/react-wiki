import React from 'react'

const Cards = ({ results }) => {
  // console.log(results);

  let display;
  console.log(results);

  if(results){
    // results.map(x) will target each item of the object
    display = results.map(x => {
      // destructure the x
      let { id, name, image, location, } = x
      return(
        
        <div key={id} className="col-4">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
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
