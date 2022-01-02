import React from 'react'
import FilterBTN from '../FilterBTN';

const Status = () => {
    return (
        <div className="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <FilterBTN />
      </div>
    </div>
  </div>
    )
}

export default Status
