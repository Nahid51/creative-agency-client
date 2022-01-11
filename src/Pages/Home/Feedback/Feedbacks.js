import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useGetReviewsQuery } from '../../../Redux/slices/serviceSlice';
import Feedback from './Feedback';

const Feedbacks = () => {
    const reviewInfo = useGetReviewsQuery() || {};
    return (
        <div>
            <div className='test-margin'>
                <h3 className='fw-bold text-center mb-5'>Clients <span style={{ color: "#7AB259" }}>Feedback</span></h3>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {reviewInfo?.data?.map((review) => (
                            <Feedback
                                key={review._id}
                                feedback={review}
                            ></Feedback>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Feedbacks;