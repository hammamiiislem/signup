import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../configuration/axiosconfig';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({})
  const validateForm = () => {
    let errors = {};
    if (data.email === '') {
      errors.email = "please enter your email";
    }
    if (data.password.length < 6) {
      errors.password = "please enter your password";
    } 
    return errors;
   }
const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEnvoyer = async (e) => {
    // important pour empêcher le rechargement de page
    const validationErrors=validateForm();
    setError(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // Display the error messages using toast
   console.log(error);
   Object.keys(validationErrors).forEach((key) => {
    toast.error(validationErrors[key], {
      position: "top-right",
      autoClose: 5000,})
    })
      return;}
     e.preventDefault();
  
    try {
      const response = await axios.post('/user/login', data);
      console.log(response);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4">
        <Form onSubmit={handleEnvoyer}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name="email" 
              value={data.email} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={data.password} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
