import React from 'react';
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";

import FormPics from './FormPics';

const Signup = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <FormPics buttonText="SIGN IN" link="/signin"/>
                </Col>
                <Col md={6}>
                    <Card class="card mb-4 border-0" style={{ width: '550px', height: '385px' }}>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="small">FULL NAME </Form.Label>
                                    <Form.Control type="email" placeholder="Enter your full name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>EMAIL ADDRESS</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>PASSWORD</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" />
                                </Form.Group>
                                <Button variant="success btn-block" type="submit">
                                    CREATE MY ACCOUNT
                                </Button>
                            </Form>      
                            <p className="pt-2"><a className="text-success" href="">Forgot your password?</a></p>              
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;    