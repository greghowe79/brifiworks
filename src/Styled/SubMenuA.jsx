import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubMenuA = styled(Link)`
    display: block;
    color: #1d1d1f;
    padding: 0 1.6rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: color 650ms;
    text-decoration: none;

    &:hover {
        color: #257d8a;
    }

    @media screen and (max-width: 1000px) {
    display: block;
    color: #fff;
    padding: 0 1.6rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: color 650ms;
    text-decoration:none;
    }
`;