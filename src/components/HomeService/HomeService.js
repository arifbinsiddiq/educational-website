import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeService.css';

const HomeService = (props) => {

    const {image, service_name, duration, description} = props.singleservice;

    return (
        <Col>
            <Card>
                <Card.Img className="card-home-service" variant="top" src={image} />
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

export default HomeService;