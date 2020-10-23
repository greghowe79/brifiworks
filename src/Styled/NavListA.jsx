import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavListA = styled(Link)`
    display: block;
    color: #ffffff;
    padding: 0;
    margin: 0 15px;
    font-size: 16px;
    text-transform: uppercase;
    transition: color 650ms;
    text-decoration:none;
    font-family: 'lato';
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover {
        display:inline-block;
        position: relative;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        transform: scale(0);
        height: 0.8px;
        bottom: 40px;
        left: 0;
        background-color: white;
        transform-origin: bottom right;
        transition: transform 0.45s ease-out;
    }

    &:hover::before {
        transform: scale(1);
        transform-origin: bottom left;
    }


   


    @media screen and (max-width: 1000px) {
    display: block;
    color: #fff;
    padding: 0;
    margin: 0 15px;
    font-size: 16px;
    text-transform: uppercase;
    transition: color 650ms;
    text-decoration:none;

    &::before {
        background-color: black;
    }

    &:hover {
       color:rgb(0, 255, 255);
    }
    }
`;