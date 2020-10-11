import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'


import SignUp from './components/Signup'


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp/>
      </div>
    </Container>    
  );
}

export default App;
