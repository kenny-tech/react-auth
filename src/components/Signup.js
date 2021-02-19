import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

import FormPics from './FormPics';

const Signup = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        if(name !== '' && email!== '' && password !== '') {
            axios.post('http://localhost:8000/api/signup', {
                name,
                email,
                password
              })
              .then((response) => {
                swal(
                    "Good job!",
                    "User successfully created",
                    "success"
                  );
              }, (error) => {
                console.log(error);
              });
        } else {
            console.log('All fields are required')
        }
        setIsSubmitted(true);
        e.preventDefault();
    }
    
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <FormPics buttonText="SIGN IN" link="/signin"/>
                </Col>
                <Col md={6}>
                    <Card class="card mb-4 border-0" style={{ width: '550px', height: '385px' }}>
                        <Card.Body>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>FULL NAME </Form.Label>
                                    <Form.Control type="text" name="name" onChange={e => setName(e.target.value)} placeholder="Enter your full name" />
                                    {isSubmitted && name==='' && <span class="text-danger">Full Name is required</span>}
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>EMAIL ADDRESS</Form.Label>
                                    <Form.Control type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
                                    {isSubmitted && email==='' && <span class="text-danger">Email is required</span>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>PASSWORD</Form.Label>
                                    <Form.Control type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
                                    {isSubmitted && password==='' && <span class="text-danger">Password is required</span>}
                                </Form.Group>
                                {
                                    name !== '' && email !== '' && password !== '' ? (                                <Button variant="success btn-block" type="submit">
                                        CREATE MY ACCOUNT
                                        </Button>) : (<Button variant="success btn-block" type="submit" disabled={true}>
                                        CREATE MY ACCOUNT
                                    </Button>
                                    )
                                }
                            </Form>      
                            <p className="pt-2 text-success">Forgot your password?</p>              
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;    