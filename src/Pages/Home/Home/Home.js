import React from 'react';
import Banner from '../Banner/Banner';
import Feedbacks from '../Feedback/Feedbacks';
import Footer from '../Footer/Footer';
import Logos from '../Logos/Logos';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Logos />
            <Services />
            <OurWorks />
            <Feedbacks />
            <Footer />
        </div>
    );
};

export default Home;