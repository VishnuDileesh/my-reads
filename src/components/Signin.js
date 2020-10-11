import React, { useRef } from 'react'

import { Card, Form, Button } from 'react-bootstrap'

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <Card>
      <Card.Body>
        <Card.Title><h2>Sign In to continue</h2></Card.Title>

        <Form>
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
  )
}

export default SignIn
