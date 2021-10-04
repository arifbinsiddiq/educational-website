import React from 'react';
import Campus from '../Campus/Campus';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <HomeServices></HomeServices>
            <Campus></Campus>
            <Footer></Footer>
        </div>
    );
};

export default Home;