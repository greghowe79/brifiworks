import React from 'react';
import { IconContext } from 'react-icons';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.styles.css';

const Footer = () => {
    return (
        <div className="wrapper">
        <div className="zone">
            <h4 className="location-contact">Location</h4>
            <ul className="ul">
                <li>Reg No 144/166/11476</li>
                <li>VAT No</li>
                <li>Office Address:</li>
                <li>Brifiworks</li>
                <li>Vogelanger 13B</li>
                <li>81477 Munich</li>
                <li>Germany</li>
            </ul>
        </div>
        <div className="zone-share">
            <h4 className="share">Share and follow</h4>
            <IconContext.Provider value={{ className: 'react-icons'}}>
            <ul>
                <li className='icons'><a href='https://twitter.com/brifiworks' target='_blank' rel="noopener noreferrer"><FaTwitter /></a></li>
                <li className='icons'><a href='https://www.linkedin.com/company/brifiworks/?viewAsMember=true' target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                <li className='icons'><a href='https://www.facebook.com/Brifiworks-105190271299906' target='_blank' rel="noopener noreferrer"><FaFacebookF /></a></li>
                <li className='icons'><a href='https://www.instagram.com/brifiworks' target='_blank' rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
            </IconContext.Provider>
        </div>
        <div className="zone-contact">
             <h4 className="location-contact">Contact</h4>
          <ul className="ul">
              <li>Get in touch</li>
              <li>+49 151 63 400 361</li>
              <li>info@brifiworks.com</li>
          </ul>
        </div>
        
       </div>


    );
}

export default Footer;