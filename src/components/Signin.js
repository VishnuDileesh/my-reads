import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import { Container, Card, Form, Button, Alert } from 'react-bootstrap'



const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')

  const { signin } = useAuth()

  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    try{

      setError('')
      await signin(emailRef.current.value, passwordRef.current.value)

      history.push('/')

    }catch{
      setError('Sign in failed for some reason')
    }

  }


  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <Card.Title><h2>Sign In to continue</h2></Card.Title>

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
                Sign In  
              </Button>
            </Form>

          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default SignIn
