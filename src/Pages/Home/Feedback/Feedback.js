import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Feedback = ({ feedback }) => {
    const { } = feedback;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='row align-items-center'>
                            <Card className='col-3 border-0'>
                                <Card.Img style={{ height: '80px', width: '80px' }} className='rounded-circle' variant="top" src="" />
                            </Card>
                            <Card className='col-9 border-0'>
                                <Card.Body>
                                    <Card.Title className='fw-bold'>{ }</Card.Title>
                                    <Card.Text className='fs-6'>{ }</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Title>
                        <Card.Text className='feedback-card text-secondary'>{ }</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Feedback;