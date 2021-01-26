import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.styles.css';
import CustomButton from '../custom-button/custom-button';
import Modal from '../Modal/Modal';
import Newsletter from '../Newsletter/Newsletter';


const myComponentStyle = {
    color: 'blue',
    lineHeight: 10,
    padding: '1.5em',
}
const Footer = () => {
    const [isModaVisible, setIsModalVisible] = useState(false);
    return (
        <div className='colore-foot'>
            <div className="wrapper">
                <div className="zone">
                    <h5 className="location-contact">Location</h5>
                    <ul className="ul">
                        <li>Reg No 144/166/11476</li>
                        <li>Ust-ID DE331836488</li>
                        <li>Office Address:</li>
                        <li>Brifiworks</li>
                        <li>Vogelanger 13B</li>
                        <li>81477 Munich</li>
                        <li>Germany</li>
                    </ul>
                </div>
                <div className="zone-share">
                    <h5 className="share">Share and follow</h5>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <ul>
                            <li className='icons'><a href='https://twitter.com/brifiworks' aria-label="Twitter" target='_blank' rel="noopener noreferrer"><FaTwitter /></a></li>
                            <li className='icons'><a href='https://www.linkedin.com/company/brifiworks/?viewAsMember=true' aria-label="Linkedin" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                            <li className='icons'><a href='https://www.facebook.com/brifiworks' aria-label="Facebook" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a></li>
                            <li className='icons'><a href='https://www.instagram.com/brifiworks' aria-label="Instagram" target='_blank' rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </IconContext.Provider>
                </div>
                <div className="zone-contact">
                    <h5 className="location-contact">Contact</h5>
                    <ul className="ul">
                        <li>Get in touch</li>
                        <li>+49 151 63 400 361</li>
                        <li><a href="mailto:info@brifiworks.com"><span className='email'>info@brifiworks.com</span></a></li>
                    </ul>
                </div>
                <CustomButton className="newsletter-button" onClick={() => setIsModalVisible(true)}>NEWSLETTER</CustomButton>
                {isModaVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)}>
                        <h2 className="intestazione">NEWSLETTER</h2>
                        <Newsletter />
                    </Modal>
                ) : null}
            </div>
            <div className='brif'>
                <div className='n nu'>
                    <div className='n o fv'>
                        <h5 className='all'>&copy;{new Date().getFullYear()} Brifiworks | All rights reserved</h5>
                        <h5 className='av aw ax ay sp'>
                            <div className='rw ss n fv st am'>
                                <h5 className='av aw rn ro so'>
                                    <Link to='/privacy-policy'><span className='link'>Privacy Policy</span></Link>
                                </h5>
                                <h5 className='av aw rn ro so'>
                                    <Link to='/terms-of-service'><span className='link'>Terms of Service</span></Link>
                                </h5>
                            </div>
                        </h5>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Footer;
