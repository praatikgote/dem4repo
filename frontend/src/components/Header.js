import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <div className='p-2 px-4'><Navbar bg="light" variant="light" expand="md">
    <Container>
      <Navbar.Brand href="/">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  

      <Nav className="text-center">
        <Nav.Link href="uploadProduct">Upload Wallpaper</Nav.Link>
        <Nav.Link href="uploadCategory">Uplaod Category</Nav.Link>
        <Nav.Link href="uploadBanner">Uplaod Banner</Nav.Link>
        <Nav.Link href="viewProduct">View Wallpaper</Nav.Link>
      </Nav>
      </Navbar.Collapse>  
    </Container>
  </Navbar></div>
  )
}

export default Header