import React from 'react';
import './Header.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/cover/cover (1).webp';
import img2 from '../../img/cover/cover (1).jpg';
import img3 from '../../img/cover/cover (2).jpg';

const Header = () => {
    return (
        <div className="header-section">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;