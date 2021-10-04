import React from 'react';
import './Footer.css';


const Footer = () => {

    


    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="footer-contact-us">
                            <h3 className="contact-us-heading">Contact Us</h3>
                            <address>
                                <small className="address-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </small>Address</address>
                            <p> <small className="address-icon">
                                <i class="fas fa-map-marker-alt"></i>
                                </small> Dhaka, Bangladesh</p>
                            <p> <small className="address-icon">
                                <i class="fas fa-phone-alt"></i>
                                </small> Mobile: +880 1711 22 33 44</p>
                            <p>
                                <small className="address-icon">
                                    <i class="fas fa-envelope"></i>
                                    </small> E-mail: absedu@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="social-find">
                            <h3 className="social-heading">Social Find</h3>
                            <div className="social-icon">
                                <a href="https://www.facebook.com/arif.siddiq.54">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/ArifurR99673235">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/arifbinsiddiq/">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arifur-rahman-7932b91b2/">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Arif-Bin-Siddiq">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright">CopyRight © Arif Bin Siddiq</p>
        </div>
    );
};

export default Footer;