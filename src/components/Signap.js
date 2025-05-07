import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from '../configuration/axiosconfig';
import { useNavigate } from 'react-router-dom';



   function SIGNUP() {
    const [data,setdata]=useState ({
        nom:'',
        prenom:'',
        email:'',
        password:''
        })
      const navigate=useNavigate();
        const handleChange= (e) => {
        const {name , value} =e.target;
        setdata({...data, [name]:value});
        }
        const handleSubmit=async (e) => {
          try{
            const respons=await axios.post('/user/addUser',data);
            console.log(respons);
            navigate('/login');
          }catch(err){
            console.log(err);
          }
            

        }
    return(
   
   <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <Card style={{ width: '30rem',   }} className='shadow'>
  
    <Form>

    <Row>
      <Col  className='mx-3 my-5'>
        <Form.Control value={data.prenom} onChange={handleChange}  name="prenom" placeholder="First name" />
      </Col>
      <Col className='mx-3 my-5'>
        <Form.Control  value ={data.nom}  onChange={handleChange}  name="nom" placeholder="Last name" />
      </Col>
    </Row>
    
    <Row >
    <Col className='my-5 mx-3'>
        <Form.Control value ={data.email} onChange={handleChange}  name="email" placeholder="Email" />
      </Col>
      <Col className='my-5 mx-3'>
        <Form.Control value ={data.password} onChange={handleChange} name="password"  placeholder="Password" />
      </Col>
    </Row>
    <div className='d-flex justify-content-center'>
    <Button variant="primary"  onClick={handleSubmit} >submit</Button>
    </div>
  
  </Form>
  </Card>
  </Container>
    )
}


export default SIGNUP;