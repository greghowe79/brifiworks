import styled from 'styled-components';

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        background-color: #000;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3.5rem;
        align-items: center;
        text-align: center;
        z-index: 100;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        overflow-y: scroll;
        transition: transform 0.3s ease-out;
        
        & > li {
		line-height: 6rem;
	}
    }
`;