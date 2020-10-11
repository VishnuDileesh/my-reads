import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

import { useAuth } from '../contexts/AuthContext'



const Header = () => {


  const { currentUser, signout } = useAuth()


  async function userout(){
    try{
      signout()
    }catch{
      console.log('Error occured')
    }
  }

  return (
    <Navbar bg="dark" variant="dark" style={{marginBottom: "1rem"}}>
      <Navbar.Brand href="/">My-Reads</Navbar.Brand>
      <Navbar.Toggle area-controls="navbar-nav"/>
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav className="">
          { currentUser && <><h3 style={{ color: "white" }}>{currentUser.email}</h3> <Button variant="link" onClick={userout}>Sign Out</Button></> }
          { !currentUser && <><Nav.Link href="/signup">Sign Up</Nav.Link><Nav.Link href="/signin">Sign In</Nav.Link></> }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
