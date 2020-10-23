import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import CookieConsent from "react-cookie-consent";
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ReactGa from 'react-ga';
import './App.css';

const HomePage = lazy(() => import('./pagine/homepage/HomePage'));
const Competencies = lazy(() => import('./pagine/Competencies/Competencies'));
const ContentStrategy = lazy(() => import('./pagine/ContentStrategy/ContentStrategy'));
const StoryTelling = lazy(() => import('./pagine/StoryTelling/StoryTelling'));
const Marketing = lazy(() => import('./pagine/Marketing/Marketing'));
const ClientsWeLove = lazy(() => import('./pagine/ClientsWeLove/ClientsWeLove'));
const Values = lazy(() => import('./pagine/Values/Values'));
const About = lazy(() => import('./pagine/About/About'));
const Contact = lazy(() => import('./pagine/Contact/Contact'));
const Privacy = lazy(() => import('./pagine/Privacy/Privacy'));
const Terms = lazy(() => import('./pagine/Terms/Terms'));

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-176205553-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  
    return (
      <Router>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#1d1d1f" }}
          buttonStyle={{ color: "#1d1d1f", fontSize: "13px"}}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>Brifiworks</span>
        </CookieConsent>
      <div className="page-wrapper">
        <div className='content-wrap'>
            <ScrollToTop />
            <Navbar />
            <Switch>
              <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/competencies' component={Competencies} />
                    <Route path='/competencies/content-strategy' component={ContentStrategy} />
                    <Route path='/competencies/storytelling' component={StoryTelling} />
                    <Route path='/competencies/marketing' component={Marketing} />
                  <Route exact path='/clients-we-love' component={ClientsWeLove} />
                  <Route exact path='/values' component={Values} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/privacy-policy' component={Privacy} />
                  <Route exact path='/terms-of-service' component={Terms} />
                </Suspense>
              </ErrorBoundary>
            </Switch>
          </div>
        <Footer />
      </div>
      </Router>
      
    );

  }
  
export default App;
