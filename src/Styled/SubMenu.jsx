import styled from 'styled-components';

export const SubMenu = styled.ul`
    width: 20rem;
    display: block;
    position: absolute;
    border-top: 3px solid #1d1d1f;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    max-width: 15rem;
    z-index: 100;
    top: 9rem;
    opacity: 0;
    visibility: hidden;
    transition: all 650ms ease;
    border-radius: 2%;

    &::before {
        content: "";
        position: absolute;
        top: -1.6rem;
        left: 3rem;
        border: 0.8rem solid transparent;
        border-bottom-color: #1d1d1f;
    }

    @media screen and (max-width: 1000px) {
        position: initial;
        border: 3px solid transparent;
        border-left-color: #fff;
        margin-left: 1rem;
        margin-top: 0%;
        max-height: 0;
        background-color: #000;
        box-shadow: inherit;

            &::before {
            display: none;
        }
    }
`;