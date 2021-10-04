import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {service_name, image, duration, description} = props.service;
    return (
        
            <Col>
                <Card>
                    <Card.Img className="card-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{service_name}</Card.Title>
                        <Card.Text>
                            <p><b>Class Duration:</b> {duration}</p>
                            <p>{description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
    );
};

export default Service;