import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
    width: 30rem;
    height: 20rem;
    background-color: transparent;
    display: block;
    margin: -4rem 0 0 -5.9rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-left: -5.2%;



 
    @media screen and (max-width: 1513px) {
        width: 25rem;
        height: 20rem;
        margin-left: -5.7%;
    }

    @media screen and (max-width: 1370px) {
        width: 24rem;
        height: 19rem;
        
    }

    @media screen and (max-width: 1242px) {
        width: 22rem;
        height: 18rem;
        margin-left: -6%;
        
    }
`;