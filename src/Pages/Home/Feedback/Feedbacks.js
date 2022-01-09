import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Feedbacks = () => {
    // const feedbackInfo = useGetReviewsQuery() || {};
    return (
        <div className='home-top'>
            <div className='test-margin'>
                <h3 className='text-center'>Testimonials</h3>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {/* {feedbackInfo.data?.map((feedback) => (
                            <Feedback
                                key={feedback._id}
                                feedback={feedback}
                            ></Feedback>
                        ))} */}
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Feedbacks;