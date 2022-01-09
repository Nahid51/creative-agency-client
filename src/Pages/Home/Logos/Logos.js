import React from 'react';
import { Card } from 'react-bootstrap';
import logo1 from '../../../images/logos/airbnb.png';
import logo2 from '../../../images/logos/google.png';
import logo3 from '../../../images/logos/netflix.png';
import logo4 from '../../../images/logos/slack.png';
import logo5 from '../../../images/logos/uber.png';

const Logos = () => {
    return (
        <div>
            <div style={{ margin: "5rem 0" }}>
                <div className='d-flex justify-content-center align-items-center'>
                    <Card style={{ width: "7rem", border: "none", marginLeft: "5rem" }} >
                        <Card.Img variant="top" src={logo1} />
                    </Card>
                    <Card style={{ width: "7rem", border: "none", marginLeft: "5rem" }} >
                        <Card.Img variant="top" src={logo2} />
                    </Card>
                    <Card style={{ width: "5rem", border: "none", marginLeft: "5rem" }} >
                        <Card.Img variant="top" src={logo5} />
                    </Card>
                    <Card style={{ width: "6rem", border: "none", marginLeft: "5rem" }} >
                        <Card.Img variant="top" src={logo3} />
                    </Card>
                    <Card style={{ width: "7rem", border: "none", marginLeft: "5rem" }} >
                        <Card.Img variant="top" src={logo4} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Logos;