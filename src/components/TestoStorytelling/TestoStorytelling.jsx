import React from 'react';
import { Link } from 'react-router-dom';

const TestoStorytelling= () => (
  <div className='sfondo-testo'>
    <div className="text-container">
      <div className="alto">
          <h2>Why Do We Need Stories?</h2>
      </div>
      <div className="paragrafo">
      Storytelling belongs to the very nature of the human being. For centuries it has served literature, theatre, cinema, and many other narrative outlets with the objective to inform, entertain, instil moral values, educate, and, more generically, to elevate our souls.
      </div>
      <div className="paragrafo">
      In business, as well as in non-profits, storytelling is a powerful way to connect to a targeted audience in a manner that resonates at an emotional level, but also to turn a chaotic bundle of information into something more coherent, where the story arc gives direction as the reader is led from one idea to the next. The craft of telling stories leads an audience to identify with the situation described; it helps to familiarise a brand and creates an unbreakable bond of trust that brings the audience to engage, support, and promote the information or message further.
      </div>
        <div className="paragrafo">
        <h2>Basics First: An Obsession for Authenticity</h2>
      </div>
        <div className="paragrafo">
        Untrue stories hardly get us anywhere, and if they do, they don't cruise too far. To be memorable, a story needs to be authentic, relatable, and engaging for the audience, no matter if it's a group of investors for a start-up company, a market for a small entrepreneur, or for fundraising for a non-profit organization. At Brifiworks, we keep it real to make it last. We transpose the traditional ingredients that make a good story to the world of small businesses and non-profits with one purpose in mind: aspiring for good in all we do.
      </div>
        <div className="paragrafo">
        <h2>Stories Outlets: When the Sky is the Limit</h2>
      </div>
        <div className="paragrafo">
        While the most obvious choice nowadays is to tell stories with videos, storytelling can be embedded in the ‘About Us’ section of a website, in written customer reviews, a slide deck on a new product or service, a presentation, a podcast, a comic, an illustration, and the list may go on and on, for wherever there is human presence and attendance, there are stories to tell.
      </div>
        <div className="paragrafo">
        Keeping a cohesive narrative arc across different media and platforms is the next big opportunity to amplify a message, build awareness, engage, and grow influence in a given market or field. Whether in-house or in collaboration with a trusted party, we determine the most appropriate platforms and media to deliver on the promise of inspiring, useful, and usable content. 
      </div>
        <div className="paragrafo">
        <p className="p-basso">Fill out the <Link to='/contact'><span className='text-link'>contact</span></Link> form to get in touch with us.</p>
      </div>
	  </div>
  </div>
);

export default TestoStorytelling;