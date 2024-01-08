import React from 'react';
import {Menubtn} from '../Components/MenuBtn';
import './home.css';
import Button from 'react-bootstrap/Button';
import Aboutimg from '../Images/about.jpg'
import { Link } from 'react-router-dom';
import { Gallery } from '../Components/Gallery';
import { ContactInfo } from '../Components/ContactInfo';
function Home(){
    return(
        <div>
        <div className='homepage'>
            <div className='h-100 min-vh-100 d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex d-md-block flex-column align-items-center'>
                            <h2 className='mb-1 welcome'>Welcome To</h2>
                            <h1 className='mb-3 resto'>Resto Foods</h1>
                            <Menubtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container my-5'>
        <div className='row'>
            <div className='col-lg-6 d-none d-lg-flex about'>
                <img src={Aboutimg} className='img-fluid rounded' />
            </div>
            <div className='col-lg-6 flex-column aboutcontent'>
                    <h2 className='fw-bold mb-4 text-center'>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='d-grid'> 
                        <Link to='/about'>     
                        <Button variant="outline-success" size='lg'>More About Us</Button>
                        </Link>
                        </div>
            </div>
            
        </div>
        </div>

        <div className='menu-sec py-5'>
            <h1 className='text-center text-success'>Favorites</h1>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center my-4'>
                    <h2 className='fw-bold mb-4'>Food</h2>
                     <div className='d-flex justify-content-between'>
                        <p className='mx-4'>English Breakfast</p>
                        <p className='text-success'>$10</p>
                     </div>
                     <div className='d-flex justify-content-between'>
                        <p className='mx-4'>Pizza</p>
                        <p className='text-success'>$12</p>
                     </div>
                     <div className='d-flex justify-content-between'>
                        <p className='mx-4'>Burger</p>
                        <p className='text-success'>$10</p>
                     </div>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center my-4'>
                    <h2 className='fw-bold mb-4'>Drinks</h2>
                     <div className='d-flex justify-content-between'>
                        <p className='mx-4'>English Breakfast</p>
                        <p className='text-success'>$10</p>
                     </div>
                     <div className='d-flex justify-content-between'>
                        <p className='mx-4'>Pizza</p>
                        <p className='text-success'>$12</p>
                     </div>
                     <div className='d-flex justify-content-between'>
                        <p className='mx-4'>Burger</p>
                        <p className='text-success'>$10</p>
                     </div>
                </div>
            </div>
        </div>
        <Gallery />
        <div className='fluid-container bg-dark'>
        <ContactInfo />
        </div>
    </div>
        
    )
}
export default Home;