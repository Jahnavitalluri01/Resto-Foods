import React from "react";
import Contactinfo from '../Images/contactinfo.jpg'
export function ContactInfo(){
    return(
        <div className="container my-5 py-5">
               <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">  {/*since flex-direction-column we use align-items for horizontal alignment */}
                    <h1 className="fw-bold fs-3">Where To Find Us</h1>
                    <p className="text-center">48 Baker Street, Missouri</p>
                    <div className="my-4 d-flex flex-column align-items-center">
                        <h6 className="fw-bold fs-5 mb-3">Opening Hours</h6>
                        <p>Mon-Fri: &nbsp; 09:00AM-09:00PM</p>
                        <p>Sat-Sun: &nbsp; 10:00AM-09:00PM</p>
                    </div>
                </div>
             <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={Contactinfo}  className="img-fluid rounded w-75 h-75 border border-3 border-white"/>
                </div> 
               </div>

        </div>
    )
}