import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{marginBottom: "1rem"}}>
      <Navbar.Brand href="/">My-Reads</Navbar.Brand>
      <Navbar.Toggle area-controls="navbar-nav"/>
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav className="">
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
