import React from 'react';
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";

import FormPics from './FormPics';

const Signin = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        if(email!== '' && password !== '') {
            axios.post('http://localhost:8000/api/signin', {
                email,
                password
              })
              .then((response) => {
                swal(
                    "Good job!",
                    "Login successful",
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
                    <FormPics buttonText="SIGN UP" link="/signup"/>
                </Col>
                <Col md={6}>
                    <Card class="card mb-4 border-0" style={{ width: '550px', height: '385px' }}>
                        <Card.Body>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                               <Form.Group controlId="formBasicEmail">
                                    <Form.Label>EMAIL ADDRESS</Form.Label>
                                    <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
                                    {isSubmitted && email=='' && <span class="text-danger">Email is required</span>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>PASSWORD</Form.Label>
                                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
                                    {isSubmitted && password=='' && <span class="text-danger">Password is required</span>}
                                </Form.Group>
                                <Button variant="success btn-block" type="submit">
                                    SIGN IN
                                </Button>
                            </Form>      
                            <p className="pt-2 text-success">Forgot your password?</p>              
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin;    