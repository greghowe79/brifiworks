import React from 'react';
import { Link } from 'react-router-dom';


const TestoCompetencies= () => (
	<div className='sfondo-testo'>
		<div className="text-container">
		<div className="alto">
          <h2>What We Offer</h2>
      </div>
		<div className="paragrafo">
		We develop a content strategy, curate, and create content with a narrative that rings true for our clients’ target audience or market.
		</div>
		<div className="paragrafo">
		Content strategy, storytelling, and marketing: a multidisciplinary approach that focuses on a strategy-first attitude and sets the stage for impactful and coherent transmedia storytelling to promote products or services, to support ambitious initiatives, to foster brave projects, and to elevate individuals from different walks of life in their work.
		</div>
		<div className="paragrafo">
		We listen, integrate, develop, and deliver while having fun in the process.
		</div>
		<div className="paragrafo">
          <h2 className='fondo-pagina'>Sounds Like Just What You Need?</h2>
          <p className="p-basso">Fill out the <Link to='/contact'><span className='text-link'>contact</span></Link> form to get in touch with us.</p>
      </div>
		</div>
	</div>
);

export default TestoCompetencies;