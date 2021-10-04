import React, { useEffect, useState } from 'react';
import './Teachers.css';
import { Card, Col, Row } from 'react-bootstrap';

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    return (
        <div className="container">
            <h1 className="teacher-heading">Our <small className="teacher">Teacher's</small></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    teachers.map(teacher => <Col
                        key={teacher.key}
                    >
                        <Card>
                            <Card.Img variant="top" src={teacher.img} />
                            <Card.Body>
                                <Card.Title>{teacher.name}</Card.Title>
                                <Card.Text>
                                    {teacher.profession}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    )
                }

            </Row>
        </div>
    );
};

export default Teachers;