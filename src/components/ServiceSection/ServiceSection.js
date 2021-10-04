import React, { useEffect, useState } from 'react';
import './ServiceSection.css';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const ServiceSection = () => {

    const [services, setServies] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServies(data))
    }, [])


    return (
        <div className="services-section">
            <div className="container">
                <h2 className="our-services">Our <small className="services">Services</small></h2>
                <Row xs={1} md={3} className="g-4">
                    {  
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default ServiceSection;