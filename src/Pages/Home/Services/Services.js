import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    return (
        <div>
            <div className='mt-5 text-center'>
                <Container>
                    <h3 className='fw-bold'>Provide awesome <span style={{ color: "#7AB259" }}>services</span></h3>
                    <div className='mt-3 mb-3'>
                        {/* <Row xs={1} md={3} className="g-4">
                            {.map((service) => (
                                <Service
                                    key={service._id}
                                    service={service}
                                ></Service>
                            ))}
                        </Row> */}
                    </div>
                    <NavLink to="/allservices">
                        <Button className='btn edit-btn mb-5'>Explore More</Button>
                    </NavLink>
                </Container>
            </div>
        </div>
    );
};

export default Services;