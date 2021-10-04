import React from 'react';
import img4 from '../../img/cover/campus (1).webp';

const AboutSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <h2>Our Campus</h2>
                    <p>A campus is traditionally the land on which a college or university and related institutional buildings are situated. Usually a college campus includes libraries, lecture halls, residence halls, student centers or dining halls, and park-like settings. A modern campus is a collection of buildings and grounds that belong to a given institution, either academic or non-academic. Examples include the Googleplex and the Apple Campus.</p>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;