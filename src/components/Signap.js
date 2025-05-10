import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container } from 'react-bootstrap';
import { useState } from 'react';
import login from './login';
import axios from '../configuration/axiosconfig';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



   function SIGNUP() {
    const [data,setdata]=useState ({
        nom:'',
        prenom:'',
        email:'',
        password:''
        })
        const [error,seterror]=useState({
           
        })
        const validateForm=(data)=>{
            let errors={};
            if(data.nom.length===0){
                errors.nom="please enter your name";
            }
            if(data.prenom.length===0){
                errors.prenom="please enter your prenom";
            }
            if(data.email.length===0){
                errors.email="please enter your email";
            }
            if(data.password.length===0){
                errors.password="please enter your password";
            }
            if(data.confirmpassword!==data.password){
                errors.confirmpassword="passwords do not match";
            }
            seterror(errors);
        }
        
      const navigate=useNavigate();
        const handleChange= (e) => {
        const {name , value} =e.target;
        setdata({...data, [name]:value});
        }
        const handleSubmit=async (e) => {
            e.preventDefault();
            validateForm(data);
            if (Object.keys(error).length > 0) {
              const notify = () => toast("Errors:", error);
              notify();
             return;
          }
          
           
            // const response=await axios.post('/user/addUser',data);
            // console.log(response);
        

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
    <Row>
      <Col className='mx-3 my-5'>
        <Form.Control value ={data.age} onChange={handleChange}  name="age" placeholder="age" />
      </Col>

    </Row>    
      <Row >
    <Col className='my-5 mx-3'>
        <Form.Control value ={data.email} onChange={handleChange}  name="email" placeholder="Email" />
      </Col>
      <Col className='my-5 mx-3'>
        <Form.Control value ={data.password} onChange={handleChange} name="password"  placeholder="Password" />
      </Col>
      <Col className='my-5 mx-3'>
        <Form.Control value ={data.confirmpassword} onChange={handleChange} name="confirmpassword"  placeholder="Confirme Password" />
      </Col>
    </Row>
    <div className='d-flex justify-content-center'>
    <Button variant="primary"  onClick={handleSubmit} >submit</Button>
    <ToastContainer />
    </div>
  
  </Form>
  </Card>
  </Container>
    )
}


export default SIGNUP;