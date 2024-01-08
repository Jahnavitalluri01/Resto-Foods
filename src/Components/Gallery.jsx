import React from "react";
import Gallery1 from '../Images/gal1.jpg'
import Gallery2 from '../Images/gal2.webp'
import Gallery3 from '../Images/gal3.jpg'
import Gallery4 from '../Images/gal4.webp'
import Gallery5 from '../Images/gal5.webp'
import Gallery6 from '../Images/gal6.jpg'
export function Gallery(){
    return(
        <div className="container my-5">
            <h2 className="fw-bold text-center mb-5">Gallery</h2>
          <div className='row gx-5 gy-5 justify-content-center'>
              <div className="col-lg-4 col-md-6">
                <img src={Gallery1} className="img-fluid rounded w-100 h-100 border border-4 border-white"/>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Gallery2} className="img-fluid rounded w-100 h-100 border border-4 border-white"/>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Gallery3}  className="img-fluid rounded w-100 h-100 border border-4 border-white"/>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Gallery4} className="img-fluid rounded w-100 h-100 border border-4 border-white"/>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Gallery5} className="img-fluid rounded w-100 h-100 border border-4 border-white"/>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Gallery6}  className="img-fluid rounded w-100 h-100 border border-4 border-white"/>
              </div>
              </div>
        </div>
    )
}