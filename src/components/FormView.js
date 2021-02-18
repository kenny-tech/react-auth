import React from 'react';
import { Row, Col, Card } from "react-bootstrap";

import Register from './Register';

const FormView = () => {
    return (
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        Form Pic
                    </Card.Body>
                </Card>
            </Col>
            <Col md={12}>
                <Card>
                    <Card.Body>
                        <Register />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default FormView;    