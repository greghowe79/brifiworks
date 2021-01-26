import React from 'react';
import { Link } from 'react-router-dom';

const TestoValues = () => (
  <div className='sfondo-testo'>
    <div className="text-container">
      <div className="alto">
          <h2>Live Up to What is Good</h2>
      </div>
      <div className="paragrafo">
        Recent studies show how customers are choosing businesses that stand for a purpose they identify with that reflects their values and beliefs, a fundamental to set enthusiastic entrepreneurs, ambitious startups, talented artists, and driven non-profit organisations up for success. Here are our innate and practised core values:
      </div>
        <div className="paragrafo">
        <h2>Authenticity</h2>
      </div>
        <div className="paragrafo">
        Honesty is an essential part of being authentic, but there is more to its definition. To be authentic means to display integrity, which includes total honesty and transparency. Authenticity is demonstrated in the collection of choices we make every day, the choice to show up and be real to ourselves, to our customers, and partners. No shortcuts allowed.
      </div>
        <div className="paragrafo">
        <h2>Integrity</h2>
      </div>
        <div className="paragrafo">
        We regard integrity as the foundation for trust, the wholeness derived from consistently acting in a way that is aligned to one's values. To us, it means following our ethics, doing the right thing in all circumstances, even when no one is watching. At Brifiworks, we work accurately, act consistently, take responsibility, and maintain certain confidentiality on all projects we manage. We encourage openness and foster a mutual growth approach for our clients and partners.
      </div>
        <div className="paragrafo">
        <h2>Inclusion</h2>
      </div>
        <div className="paragrafo">
        Inclusion and diversity are embedded in our genes at Brifiworks. We believe in respect and constructive interactions and put togetherness into action to promote participation and overcome exclusion. Our mission is to encourage all of our clients to embrace their positive energy to achieve memorable results.
          "If you want to go fast, go alone. If you want to go far, go together." - African proverb
      </div>
        <div className="paragrafo">
        At Brifiworks, we are proud to accept work that fits our values.
      </div>
        <div className="paragrafo">
        <h2 className='fondo-pagina'>Sounds right?</h2>
        <p className="p-basso">Fill out the <Link to='/contact'><span className='text-link'>contact</span></Link> form to get in touch with us.</p>
      </div>
	  </div>
  </div>
);

export default TestoValues;