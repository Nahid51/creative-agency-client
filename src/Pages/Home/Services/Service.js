import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    // const { } = service;s
    return (
        <div>
            <div>
                <Col>
                    <Card>
                        <Card.Img className='w-25 w-md-50 mx-auto' variant="top" src="" />
                        <Card.Body>
                            <Card.Title className='fw-bold'></Card.Title>
                            <Card.Text className='fw-bold'></Card.Text>
                            <Card.Text className='service-card text-secondary'></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Service;