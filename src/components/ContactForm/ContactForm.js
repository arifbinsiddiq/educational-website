import React from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className="container">
            <h1 className="form-heading">SEND YOUR MESSAGE</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-us">
                        <div className="contact-info">
                            <h2 className="info-heading">You Can Contact With Us</h2>
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
                        <div className="contact-find">
                            <h3 className="find-heading">Also Can Find Us</h3>
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
                <div className="col-md-6">
                    <div className="contact-form">
                        <form>
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example1" placeholder="First Name" class="form-control" />
                                        <label class="form-label" for="form3Example1"></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example2"
                                            placeholder="Last Name" class="form-control" />
                                        <label class="form-label" for="form3Example2"></label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" placeholder="Email address" id="form3Example3" class="form-control" />
                                <label class="form-label" for="form3Example3"></label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="form3Example4" placeholder="Password" class="form-control" />
                                <label class="form-label" for="form3Example4"></label>
                            </div>

                            <Link to="/contact">
                                <button className="service-btn">Login</button>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;