import React from 'react';
import './menu.css';
import Card from 'react-bootstrap/Card';
import Breakfast from '../Images/breakfast.jpg';
import Lunch from '../Images/gal5.webp'

const breakfast=[{id:1,name:'waffle',description:'Crisp raised cake baked in a waffle iron, a hinged metal griddle with a honeycombed or fancifully engraved surface',price:'$12'},
{id:2,name:'Croissant',description:'Flaky, golden-colored, crescent-shaped pastries are best made with pure butter and a slightly sweet yeast dough',price:'$10'},
{id:3,name:'Frittala al tartufo',description:'Frittata al tartufo is a traditional Umbrian and Istrian dish made with a combination of eggs, black truffles, olive oil, salt, and black pepper. ',price:'$15'}]

const lunch=[{id:1,name:'Tortellini Salad',description:'A tomato-rich dressing boosts the flavor and lowers calories and fat in this tortellini salad',price:'$12'},
{id:2,name:'Chicken Avocado BLT Wrap',description:'We use bulgur, which cooks faster and is higher in fiber than brown rice, but you could swap in quinoa',price:'$10'},
{id:3,name:'Creamy Avocado & White Bean Wrap',description:'A pinch (or more) of ground chipotle pepper and an extra dash of cider vinegar can be used in place of the canned chipotles in adobo sauce.',price:'$15'}]

function Menu(){
    return(
        <div className='my-5'>
            <div className='fluid-container d-flex align-items-center justify-content-center menu-pic'>
                  <h1>Menu</h1>
            </div>
           <div className='container my-5'>
            <div className='row'>
            <div className='col-lg-6 my-5 d-flex flex-column justify-content-center align-items-center'>
                 <h1 className='text-success fw-bold'>BreakFast</h1>
{
    breakfast.map((i)=>(
        <div className='my-3' key={i.id}>
            <Card className='border-0'>
            <Card.Title >{i.name}</Card.Title>
        <Card.Text>
          {i.description}
        </Card.Text>
        <Card.Text className='text-success fw-bold'>{i.price}</Card.Text>
            </Card>
            </div>
    ))
}
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <img src={Breakfast}  style={{width:'70%',opacity:'0.7'}} className="img-fluid rounded" />
                </div> 
            </div>
            </div>

            <div className='container my-2'>
            <div className='row'>
           
            <div className="col-lg-6 d-flex flex-column  align-items-center">
            <h1 className='text-success fw-bold text-center mb-5'>Lunch</h1>
                    <img src={Lunch}  style={{width:'70%',opacity:'0.7'}} className="img-fluid rounded mb-5" />
                </div> 
            <div className='col-lg-6 my-2 d-flex flex-column justify-content-center align-items-center'>
                 
{
    lunch.map((i)=>(
        <div className='my-3' key={i.id}>
            <Card className='border-0'>
            <Card.Title >{i.name}</Card.Title>
        <Card.Text>
          {i.description}
        </Card.Text>
        <Card.Text className='text-success fw-bold'>{i.price}</Card.Text>
            </Card>
            </div>
    ))
}
            </div>
            
            </div>
            </div>
            </div>
    )
}
export default Menu;