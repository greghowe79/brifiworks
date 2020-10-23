import React from 'react';
import { Link } from 'react-router-dom';

const TestoPrivacy= () => (
  <div className='sfondo-testo'>
    <div className="div-termini">
      <div className="text-container">
          <div className="alto">
              <h2>Privacy Policy</h2>
          </div>
          <div className="paragrafo">
          Your privacy is important to us. It is Brifiworks' policy to respect your privacy regarding any information we may collect from you across our website, <Link to='/'><span className='text-link'>brifiworks.com</span></Link>, and other sites we own and operate.
          </div>
          <div className="paragrafo">
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </div>
            <div className="paragrafo">
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
          </div>
            <div className="paragrafo">
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
          </div>
            <div className="paragrafo">
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.   
          </div>
            <div className="paragrafo">
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </div>
            <div className="paragrafo">
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </div>
            <div className="paragrafo">
            This policy is effective as of 1 October 2020.
          </div>
      </div>
    </div>
  </div>
);

export default TestoPrivacy;