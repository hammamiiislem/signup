import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../configuration/axiosconfig';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEnvoyer = async (e) => {
    e.preventDefault(); // important pour empêcher le rechargement de page
    try {
      const response = await axios.post('/user/addUser', data);
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
