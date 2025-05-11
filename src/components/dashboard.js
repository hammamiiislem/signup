import { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';


function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            navigate('/login');
        }
    }, []);
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="mt-5">
                        <Card.Body>
                            <h1>Dashboard</h1>
                            <p>Welcome to the dashboard!</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}
export default Dashboard;