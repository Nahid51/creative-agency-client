import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { photo, name, price, description } = service;
    return (
        <div>
            <div>
                <Col>
                    <Card className='service-card'>
                        <Card.Img className='w-25 w-md-50 mx-auto mt-2' variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>{name}</Card.Title>
                            <Card.Text className='fw-bold'>${price}</Card.Text>
                            <Card.Text className='text-card text-secondary'>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Service;