import React from 'react';
import './MenuBar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const MenuBar = () => {
    return (
        <div className="container">
        <Navbar className="nav-bg" expand="lg">
            <Navbar.Brand className="nav-logo" as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0 nav-menu"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default MenuBar;