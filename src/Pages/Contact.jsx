import React from 'react';
import {ContactInfo} from '../Components/ContactInfo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact(){
    return(
        <div className='my-5'>
        <div className='fluid-container d-flex align-items-center justify-content-center about-pic'>
              <h1>Contact</h1>
              </div>
            <ContactInfo />
            <div className='fluid-container d-flex justify-content-center'>
               
            <Form className='w-50 w-sm-100 w-lg-75 shadow py-5 px-5'>
            <h1 className='text-center mb-4'>Reserve</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Date of Booking</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Number of Guests</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-wrap'>Any Additional Instructions (Optional)</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <div className='d-flex justify-content-center mt-4'>
      <Button variant="success" className='btn-lg'>Submit</Button>
      </div>
      </Form>
      </div>
            </div>
        
    )
}
export default Contact;