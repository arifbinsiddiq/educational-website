import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactHeader from '../ContactHeader/ContactHeader';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <ContactHeader></ContactHeader>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Contact;