import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Form, Button, Alert } from 'react-bootstrap'


import { useAuth } from '../contexts/AuthContext'


const SignUp = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')

  const history = useHistory()

  const { signup } = useAuth()


  async function handleSubmit(e){

    e.preventDefault()

    try{
      setError('')
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    }
    catch{
      setError('Sign Up failed for some reason')
    }

  }

  return (
    <Card>
      <Card.Body>
        <Card.Title><h2>Sign Up to continue</h2></Card.Title>
        { error && <Alert variant="danger">{error}</Alert> }

        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" required/>
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" required/>
          </Form.Group>
  
          <Button type="submit">
            Sign Up  
          </Button>
        </Form>

      </Card.Body>
    </Card>
  )
}


export default SignUp
