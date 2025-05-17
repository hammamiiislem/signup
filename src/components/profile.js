import { use, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from '../configuration/axiosconfig';

function Profile() {
    const [user,setUser]=useState(
        null
    );
      const [lodaing, setLoading] = useState(false);
  
      const [error, setError] = useState({});
    
      const validateForm = () => {
        const errors = {};
    
        if (user.nom.trim() === '') {
          errors.nom = "Please enter your name";
        }
    
        if (user.prenom.trim() === '') {
          errors.prenom = "Please enter your first name";
        }
    
        if (user.email.trim() === '') {
          errors.email = "Please enter your email";
        }
     return errors;
      };
    useEffect (() => { 
        const token=localStorage.getItem('token');
        const fetchUserData = async () => {
          try {
            const response = await axios.get('/user/me', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return response.data;
            
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        const data= fetchUserData();
        setUser(data);
        console.log(user);
        
    },[]); // Empty dependency array to run only once on mount
    
  return (
    <Container>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>



      <Button variant="primary" type="submit">
        Modifier
      </Button>
    </Form>
    </Container>
  );
}


export default Profile;
