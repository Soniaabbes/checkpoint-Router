import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as= {Link}  to='/'>Home</Nav.Link>
          
            <Nav.Link  as ={Link}  to="/MovieList">movie List </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar