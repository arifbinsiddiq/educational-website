import React from 'react';
import './Campus.css';
import img4 from '../../img/cover/campus (1).webp';

const Campus = () => {
    return (
        <div className="campus-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <img className="img-fluid h-75"  src={img4} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <h2 className="our-campus">Our <small className="campus">Campus</small></h2>
                        <p className="campus-paragraph">A campus is traditionally the land on which a college or university and related institutional buildings are situated. Usually a college campus includes libraries, lecture halls, residence halls, student centers or dining halls, and park-like settings. A modern campus is a collection of buildings and grounds that belong to a given institution, either academic or non-academic. Examples include the Googleplex and the Apple Campus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campus;