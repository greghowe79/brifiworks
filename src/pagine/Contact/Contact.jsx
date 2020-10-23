import React from 'react';
import SignUp from '../../components/sign-up/sign-up';

import './Contact.styles.scss';

const divStile = {
    backgroundImage: 'url(' + require('../../assets/contactus.jpg') + ')',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    boxShadow: 'inset 000 300vh rgba(0, 0, 0, 0.1)',
  };

    function Contact  () {
        return <div className='contact-form' style={divStile}>
            
            <SignUp />
        </div>
    }
           
export default Contact;



