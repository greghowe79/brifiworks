import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import { Header } from '../../Styled/Header';
import { Container } from '../../Styled/Container';
import { Navigation } from '../../Styled/Navigation';
import { Logo } from '../../Styled/Logo';
import Burger from '../../components/Burger';
import './Nav.css';






function Navbar  ({ currentUser })  {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >=90) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    return (
        <div>
            <Header className={navbar ? 'header active' : 'header'}>
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
    );
}

export default Navbar;