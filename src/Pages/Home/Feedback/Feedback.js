import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Feedback.css'

const Feedback = ({ feedback }) => {
    const { name, photo, position, description } = feedback;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='row align-items-center'>
                            <Card className='col-3 border-0'>
                                <Card.Img style={{ height: '80px', width: '80px' }} className='rounded-circle' variant="top" src={photo} />
                            </Card>
                            <Card className='col-9 border-0'>
                                <Card.Body>
                                    <Card.Title className='fw-bold'>{name}</Card.Title>
                                    <Card.Text className='fs-6'>{position}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Title>
                        <Card.Text className='feedback-card text-secondary'>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Feedback;