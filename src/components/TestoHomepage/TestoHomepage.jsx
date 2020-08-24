import React from 'react';
import { Link } from 'react-router-dom';


const TestoHomepage= () => (
    <div className="text-container">
	  <div className="alto">
	  	Founded by a natural-born storyteller, Brifiworks is an emerging entity based in Munich, Germany, blending content strategy and a long practised corporate marketing experience to the fine craft of storytelling.
	  </div>
	  <div className="paragrafo">
	  	Our mission is to enable clients to promote, engage and influence their target audiences or end-customers throughout a unique tone and voice, in ways that are credible, trustworthy and transparent. 
	  </div>
	  <div className="paragrafo">
	  	At Brifiworks we love everybody, although we shine the best working alongside to small start-up companies, passionate entrepreneurs, non-profit organisations, emerging artists and ambitious people who aspire to promote their work or themselves as experts or influencers in their field. 
		  Throughout the development of a <Link to='/competencies/content-strategy' 
		  className='text-link'>content strategy</Link>, we help customers creating or evolving their brand, define a plan for their <Link to='/competencies/marketing' className='text-link'>marketing</Link> goals and engage their audiences with relatable <Link to='/competencies/storytelling' className='text-link'>storytelling</Link>.
	  </div>
	  <div className="paragrafo">
	  	Engaging content and authentic stories are at the heart of what we do.
	  </div>
	</div>
);

export default TestoHomepage;