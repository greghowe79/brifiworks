import React from 'react';
import logo from '../../assets/logo.webp';
import { Header } from '../../Styled/Header';
import { Container } from '../../Styled/Container';
import { Navigation } from '../../Styled/Navigation';
import { Logo } from '../../Styled/Logo';
import Burger from '../../components/Burger';




const Navbar = () => {
    return (
        <div>
            <Header>
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