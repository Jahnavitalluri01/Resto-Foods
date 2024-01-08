import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
function App() {
  return (
    <div>
        <Navbar expand='lg' className='fixed-top bg-body-teritiary shadow bg-light'>
          <Container>
            <Navbar.Brand><Link to='/' className='navbar-brand fw-bold text-success logoo'>Resto Foods</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto justify-content-end w-100 navv'>
                  <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
                  <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
                  <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
                  <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
         {/* <footer className='fixed-bottom bg-dark'>
          <p className='p-1 text-center text-white shadow-lg'>Copyright @Jahnavi</p>
         </footer> */}
    </div>
  );
}

export default App;
