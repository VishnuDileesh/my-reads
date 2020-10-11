import React from 'react';

import { Navbar } from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{marginBottom: "1rem"}}>
      <Navbar.Brand href="/">My-Reads</Navbar.Brand>
    </Navbar>
  )
}

export default Header
