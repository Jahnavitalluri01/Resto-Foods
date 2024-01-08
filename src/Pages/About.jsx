import React from 'react';
import './about.css';
import chef1 from '../Images/chef1.webp'
import chef2 from '../Images/chef2.avif'
import { Gallery } from '../Components/Gallery';
import { Reviews } from '../Components/Reviews';
function About(){
    return(
        <div className='my-5'>
        <div className='fluid-container d-flex align-items-center justify-content-center about-pic'>
              <h1>About Us</h1>
              </div>
              <div className='container my-5 shadow w-75 py-3 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                     mollit anim id est laborum.</p>
                     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                         rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                         dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                         incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                         exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                         vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                          dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
              <div className='container my-5'>
                <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center '>
                        <img src={chef1} className='img-fluid rounded w-75 h-75 border border-5 border-dark' />
                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <img src={chef2} className='img-fluid rounded w-75 h-75 border border-5 border-dark' />
                    </div>
                </div>
                </div>
              </div>
              <div className='container my-5 shadow w-75 py-3 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                     mollit anim id est laborum.</p>
                     <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                         rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                         dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                         incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                         exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                         vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                          dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
              <div className='fluid-container bg-dark text-light py-2'>
              <Gallery />
              </div>
              <Reviews />
        
        </div>
    )
}
export default About;