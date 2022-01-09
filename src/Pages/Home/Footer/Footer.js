import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-5 footer-bg text-dark'>
            <Container className='p-5'>
                <div className='row'>
                    <Card className='col-12 col-md-6 card-setup'>
                        <Card.Body>
                            <Card.Text className='fs-2 fw-bold'>
                                Let us handle your project, professionally.
                            </Card.Text>
                            <Card.Text style={{ fontSize: "14px" }}>
                                With well written codes, we build amazing apps for all platforms, mobile <br /> and web apps in general.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='col-12 col-md-6 card-setup'>
                        <Card.Body>
                            <Form>
                                <Row xs={1} md={2}>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                                type="text"
                                                placeholder="Full Name"
                                                required />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                                type="email"
                                                placeholder="Email address"
                                                required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row xs={1} md={2}>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                                type="number"
                                                placeholder="Phone Number"
                                                required />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                                type="text"
                                                placeholder="Your Address"
                                                required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        as="textarea"
                                        placeholder='Your Message'
                                        rows={3}
                                        required />
                                </Form.Group>
                                <Button type='submit' className='btn edit-btn'>Send</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
            <Card.Text style={{ fontSize: '15px', fontWeight: 200 }} className='text-center'>&copy;Creative-Agency 2021. All Rights Reserved</Card.Text>
        </div>
    );
};

export default Footer;