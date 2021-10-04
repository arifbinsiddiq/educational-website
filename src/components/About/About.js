import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import Campus from '../Campus/Campus';
import Footer from '../Footer/Footer';
import Teachers from '../Teachers/Teachers';

const About = () => {
    return (
        <div>
            <AboutHeader></AboutHeader>
            <Campus></Campus>
            <Teachers></Teachers>
            <Footer></Footer>
        </div>
    );
};

export default About;