import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import './Cards1.css';

function Cards1() {
    return (
        <div className='color'>
            <section className='grid'>
                <div className='grid-group'>
                    <div className='grid-group-image'>
                        <div className='div-foto'>
                            <img className='foto' src={require('../../assets/ale.jpg')}alt='Alessandro Mosca' />
                            <div className="overlay">
                                <IconContext.Provider value={{ className: 'social'}}>
                                <ul>
                                    <li className='icona'><a href='https://www.linkedin.com/in/alessandro-mosca-b4631b86/' target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                    <li className='icona'><a href="mailto:am@brifiworks.com"><MdEmail /></a></li>
                                </ul>
                                </IconContext.Provider>   
                            </div>
                        </div>
                        <div className='grid-group-meta'>
                            <h3 className='h3'>Alex</h3>
                            <h4 className='h4'>Web Development and UX Design</h4>
                        </div>
                            <hr className='grid-group-line'></hr>
                            <article className='grid-group-text'>
                                <p className='descrizione'>"It wasn't until my mid-thirties that I understood what I was meant to do. I love the logic of programming, how it picks up my brain and has me deliver phenomenal work for people or organisations. I am an enthusiastic computer geek, a constant learner, and a meticulous individual who can speak programming languages. I can do full stack development. I cover front end and back end, UI and UX to facilitate user navigation to support the conversion of leads to maximise success.</p>
                                <p className='descrizione'>In work and in life, I seek authenticity, fun, and new challenges. I never say no to good company and a beer."</p>
                                <p className='descrizione'>What's my hidden talent? I am bloody good at the electric guitar.</p>
                            </article>
                    </div>
                </div>
                <div className='grid-group'>
                    <div className='grid-group-image'>
                        <div className='div-foto'>
                            <img className='foto' src={require('../../assets/claudia.jpg')} alt='Claudia Mosca' />
                            <div className="overlay">
                                <IconContext.Provider value={{ className: 'social'}}>
                                <ul>
                                    <li className='icona'><a href='https://www.linkedin.com/in/claudia-mosca74/' target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                    <li className='icona'><a href="mailto:claudia.mosca@brifiworks.com"><MdEmail /></a></li>
                                </ul>
                                </IconContext.Provider>   
                            </div>
                        </div>
                        <div className='grid-group-meta'>
                            <h3 className='h3'>Claudia Mosca - Founder</h3>
                            <h4 className='h4'>Strategy, Marketing and Storytelling</h4>
                        </div>
                            <hr className='grid-group-line'></hr>
                            <article className='grid-group-text'>
                                <p className='descrizione'>"I believe in the power of stories that elevate the soul and inspire us to accomplish amazing things. At the centre of every business, every social cause, big or small, pulses a human project and a story to be told. I draw my competencies, experience and natural skills-set to investigate its potential and bring it to the world in an authentic way, in the name of small businesses with great ideas.<br /> 
                                                            Growing up, I used to regard empathy as a weakness: it often made me feel exposed in critical situations, whether in school, at work, at home, with friends, or partners. Years later, the gift of empathy has helped me combining sense in professional challenges and life choices, to creativity in a unique blend, to serve what's good."</p>
                                <p className='descrizione'>My superpower? I am an intuitive person and can read people's minds. Almost.</p>
                                
                            </article>
                    </div>
                </div>
                <div className='grid-group'>
                    <div className='grid-group-image'>
                        <div className='div-foto'>
                            <img className='foto' src={require('../../assets/isabel.jpg')} alt='Isabel Brugger' />
                            <div className="overlay">
                                <IconContext.Provider value={{ className: 'social'}}>
                                <ul>
                                    <li className='icona'><a href='https://www.linkedin.com/in/isabel-brugger-082b4948/' target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                    <li className='icona'><a href="mailto:isabel.brugger@brifiworks.com"><MdEmail /></a></li>
                                </ul>
                                </IconContext.Provider>   
                            </div>
                        </div>
                        <div className='grid-group-meta'>
                            <h3 className='h3'>Isabel Brugger</h3>
                            <h4 className='h4'>Marketing and Communications</h4>
                        </div>
                            <hr className='grid-group-line'></hr>
                            <article className='grid-group-text'>
                                <p className='descrizione'>"I understood early on that I needed an inclusive working environment that consisted of limited boundaries and an open mindset to express my passion and creativity. It took me years, and over a decade of proven corporate marketing and communications experience, to realise that I can fully develop my skills by collaborating with purpose-led companies with big ideas and strong ethics. I am IN whenever it's important to us, to our customers, to the environment and the greatness of humanity.<br />
                                                             And if you are looking for me, you can find me by the water with the music as my lifetime companion, reading the work of the sociologist Georg Simmel."</p>
                                <p className='descrizione'>My superpower? I am an energy generator; I can bring people together to work passionately on great ideas and achieve even more.</p>
                            </article>
                    </div>
                </div>
                <div className='grid-group'>
                    <div className='grid-group-image'>
                        <div className='div-foto'>
                            <img className='foto' src={require('../../assets/layla.jpg')} alt='Layla Mosca' />
                        </div>
                        <div className='grid-group-meta'>
                                <h3 className='h3'>Layla - Chief Dog Officer</h3>
                                <h4 className='h4'>Wagging good mood</h4>
                        </div>
                            <hr className='grid-group-line'></hr>
                            <article className='grid-group-text'>
                                <p className='descrizione'>"My mission is to put a smile on every hooman's face. I bite sticks, love treats, enjoy going on walks during breaks, and like to take long naps in the office. I know when it has been a good day at work by the number of snacks I get. I don't get useless barking."</p>
                                <p className='descrizione'>Should you ask what my superpower is: I can dig very deep holes in my hooman's garden.</p>
                            </article>
                    </div>
                </div>
            </section>
        </div>
    );
  }

  export default Cards1;