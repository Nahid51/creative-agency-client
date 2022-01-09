import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Feedbacks = () => {
    // const feedbackInfo = useGetReviewsQuery() || {};
    return (
        <div>
            <div className='test-margin'>
                <h3 className='fw-bold text-center'>Clients <span style={{ color: "#7AB259" }}>Feedback</span></h3>
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