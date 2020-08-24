import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pagine/homepage/HomePage';
import Competencies from './pagine/Competencies/Competencies';
import ContentStrategy from './pagine/ContentStrategy/ContentStrategy';
import StoryTelling from './pagine/StoryTelling/StoryTelling';
import Marketing from './pagine/Marketing/Marketing';
import ClientsWeLove from './pagine/ClientsWeLove/ClientsWeLove';
import Values from './pagine/Values/Values';
import Authenticity from './pagine/Authenticity/Authenticity';
import Integrity from './pagine/Integrity/Integrity';
import Togetherness from './pagine/Togetherness/Togetherness';
import Contact from './pagine/Contact/Contact';


import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import {BrowserRouter as Router} from 'react-router-dom'; 
import './App.css';



function App() {
  return (
   
    <div className="page-wrapper">
      <div className='content-wrap'>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/competencies' component={Competencies} />
              <Route path='/competencies/content-strategy' component={ContentStrategy} />
              <Route path='/competencies/storytelling' component={StoryTelling} />
              <Route path='/competencies/marketing' component={Marketing} />
            <Route exact path='/clients-we-love' component={ClientsWeLove} />
            <Route exact path='/values' component={Values} />
              <Route path='/values/authenticity' component={Authenticity} />
              <Route path='/values/integrity' component={Integrity} />
              <Route path='/values/togetherness' component={Togetherness} />
              <Route exact path='/contact' component={Contact} />
          </Switch>
        </Router>
        </div>
      <Footer />
    </div>
    
  );
}

export default App;
