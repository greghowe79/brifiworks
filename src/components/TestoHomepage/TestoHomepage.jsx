import React from 'react';
import { Link } from 'react-router-dom';


const TestoHomepage= () => (
	<div className='sfondo-testo'>
		<div className="text-container">
		<div className="alto">
          <h2>Brifiworks' Genes</h2>
      </div>
		<div className="paragrafo">
		Founded by a natural-born storyteller, Brifiworks is a consulting agency based in Munich, Germany, blending content strategy and long-practised corporate marketing experience in the fine craft of storytelling.
		</div>
		<div className="paragrafo">
		Our mission is to enable clients to promote, engage, and influence their target audiences or end-customers through unique tone and voice in ways that are credible, trustworthy, and transparent.
		</div>
		<div className="paragrafo">
		At Brifiworks, we love everybody, although we shine the best working alongside small start-up companies, passionate entrepreneurs, non-profit organisations, emerging artists, and ambitious people who aspire to promote their work or themselves as experts or influencers in their field.
		Through the development of a <Link to='/competencies/content-strategy'><span className='text-link'>content strategy</span></Link>
		, we help clients create or evolve their brand, determine a plan for their <Link to='/competencies/marketing'><span className='text-link'>marketing</span></Link> goals, and engage their audiences with relatable <Link to='/competencies/storytelling'><span className='text-link'>storytelling</span></Link>.
		</div>
		<div className="paragrafo">
			Engaging content and authentic stories are at the heart of what we do.
		</div>
		<div className="paragrafo">
          <h2 className='fondo-pagina'>Sounds Like Just What You Need?</h2>
          <p className="p-basso">Fill out the <Link to='/contact'><span className='text-link'>contact</span></Link> form to get in touch with us.</p>
      </div>
		</div>
	</div>
);

export default TestoHomepage;