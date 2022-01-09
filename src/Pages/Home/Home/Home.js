import React from 'react';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
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
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;