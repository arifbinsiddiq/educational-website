import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {

    const [allservices, setAllservices] = useState([]);

    allservices.length = 4;

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])

    return (
        <div className="container">
            <h2 className="our-services">Our <small className="services">Services</small></h2>
            <Row xs={1} md={2} className="g-4">
                {
                    allservices.map(singleservice => <HomeService
                        key={singleservice.key}
                        singleservice={singleservice}
                    ></HomeService>)
                }
            </Row>
            <Link to="/services">
                <button className="service-btn">More Services</button>
            </Link>
        </div>
    );
};

export default HomeServices;