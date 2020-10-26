import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import { Header } from '../../Styled/Header';
import { Container } from '../../Styled/Container';
import { Navigation } from '../../Styled/Navigation';
import { Logo } from '../../Styled/Logo';
import Burger from '../../components/Burger';
import './Nav.css';  
import { withRouter } from "react-router-dom";




class Navbar extends React.Component{


    changeBackground = () => {
        if(!this.state.navbar &&  ( this.props.location.pathname === '/privacy-policy'
        || this.props.location.pathname === '/terms-of-service' || (window.scrollY >=90) ) ) 
            this.setState({ navbar: true });
        else if(window.scrollY < 90 && this.state.navbar &&  this.props.location.pathname !== '/privacy-policy'
        && this.props.location.pathname !== '/terms-of-service')
            this.setState({ navbar: false });
        
    };

    constructor(props) {
        super(props);
        const activeBar = this.props.location.pathname === '/privacy-policy'
        || this.props.location.pathname === '/terms-of-service';
        this.state = {
            navbar: activeBar}; 
        window.addEventListener('scroll', this.changeBackground); 
        }

    componentDidUpdate() {
         this.changeBackground();
      } 
 

    render(){
        return (
        <div>
            <Header className={this.state.navbar ? 'header active' : 'header'}>
                <Container>
                    <Navigation>
                        <Logo to='/'>
                            <img src={logo} alt="Logo" />
                        </Logo>
                        <Burger />
             
                    </Navigation>
                </Container>
           
            </Header>
           
        </div>
    );}

   // window.addEventListener('scroll', changeBackground);
    
}

export default withRouter(Navbar);
