import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png'
import Header from '../Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='home-top'>
            <Header />
            <Container>
                <div className='d-flex justify-content-center align-items-center'>
                    <Card className='border-0 home-top'>
                        <Card.Body className='p-5'>
                            <Card.Title className='banner-head'>Let’s Grow Your
                                Brand To The
                                Next Level</Card.Title>
                            <Card.Text className='text-secondary banner-paragraph'>
                                Online web design Agency, the mordern way to create your own website, you can use our service to make sure your website is safe.
                            </Card.Text>
                            <NavLink to="/allservices">
                                <Button className='btn edit-btn'>Hire Us</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 w-75 home-top'>
                        <Card.Body>
                            <Card.Img variant="top" src={frame} />
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Banner;