import React from 'react';
import { Link } from 'react-router-dom';

const TestoClientsWeLove= () => (
  <div className='sfondo-testo'>
    <div className="text-container">
      <div className="alto">
          <h2>Not Just Another Marketing and Communication Agency</h2>
      </div>
      <div className="paragrafo">
      At Brifiworks, we work along with small businesses, non-profit organisations, and individuals, with no prejudice on their size, location, or culture. We believe in clients with a clear vision, who live on meaning and who act on the call of purpose. Here's who we work best with:
      </div>
        <div className="paragrafo">
        <h2>Start-Up Companies</h2>
      </div>
        <div className="paragrafo">
        Nothing is more exciting and frustrating than having a brilliant idea but lacking the know-how to develop it or promote it effectively. Whether the target audience is a group of investors or whether the objective is to foster that idea to grow interest in a given market, we help start-ups to concentrate on their goals for content, marketing, or a combination of both. We focus on their values and identity and develop a unique voice and tone to establish their brand and reach their business targets. 
      </div>
        <div className="paragrafo">
        <h2>Passionate Entrepreneurs</h2>
      </div>
        <div className="paragrafo">
        If the idea is already there and has been nurtured over time yet has delivered minor successes despite its potential, we can help to amplify its visibility by using the appropriate channels based on the market or audience. Through a content assessment, we will craft a cohesive narrative that embodies the greatness of the product or service to increase reach. This can result in writing an article, a post, or an ad, creating a visual, recording a podcast, reworking a website, or formulating a marketing and communication strategy. We cover a lot and work alongside external partners to accomplish even more.
      </div>
        <div className="paragrafo">
        <h2>Non-Profit Organizations</h2>
      </div>
        <div className="paragrafo">
        We fiercely aspire to good and act with common values and ethics, hence our will to help non-profit organizations all over the world to promote initiatives, engage with communities, and influence supporters and stakeholders to pledge any cause that serves the common good.   
      </div>
        <div className="paragrafo">
        <h2>Artists</h2>
      </div>
        <div className="paragrafo">
        The undisputable influence and responsibility of the arts leads all Brifiworks members to help dreamers, innovators, creators, or critical thinkers to promote their work, extend their audience base, and make their voices heard. Here we can adapt our consulting services based on the client's objective in the name of the arts.
      </div>
        <div className="paragrafo">
        <h2>Common People</h2>
      </div>
        <div className="paragrafo">
        Be it a small business, e.g. a hairdresser or a makeup artist, or in support of those who inspire to promote ideas, beliefs, or works, we help to structure the individual's core beliefs and identity and work on personal branding adopting elements, i.e. voice, tone, graphic choices, visuals etc., that best convey personality and message.
      </div>
      
        <div className="paragrafo">
          <h2 className='fondo-pagina'>And if you are not in one the categories above, we still care about you.</h2>
          <p className="p-basso">Fill out the <Link to='/contact'><span className='text-link'>contact</span></Link> form to get in touch with us.</p>
      </div>
	  </div>
  </div>

);

export default TestoClientsWeLove;