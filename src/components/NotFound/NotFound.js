import React from 'react';
import { Link } from 'react-router-dom';
import pagenotfound from '../../img/page-not-found.png';

const NotFound = () => {
    return (
        <div className="container">
            <img src={pagenotfound} alt="" />
            <div>
            <Link to="/home">
                <button className="service-btn">Bace to Home</button>
            </Link>
            </div>
        </div>
    );
};

export default NotFound;