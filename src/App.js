import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'

import { Container } from 'react-bootstrap'

import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import Dashboard from './components/Dashboard'


function App() {

  return (
    <AuthProvider>
      <Container>
        <Header/>
      </Container>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Switch>
              <PrivateRoute path="/" exact component={Dashboard}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
            </Switch>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
