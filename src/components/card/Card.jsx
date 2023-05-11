import React from 'react'
import Imag1 from "../../image/sreehar.jpg";

const Card = () => {
  return (
    <div className="container-fluid ">
      <div className="row mt-5 mb-4 pt-md-5">
        <div className="fw-bolder fs-2 text-center">
          Check out these EPIC Destinations!
        </div>
      </div>
      <div className="row mb-5">
        <div className="dflex">
          <div className="card  cardstyle">
            <img src={Imag1} className="card-img-top" alt="any" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card