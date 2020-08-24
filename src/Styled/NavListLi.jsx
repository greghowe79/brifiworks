import styled from 'styled-components';

export const NavListLi = styled.li`
    line-height: 8rem;
    position: relative;

    &:hover {
			& > .SubMenu {
				top: 6.8rem;
				opacity: 1;
				visibility: visible;
			}
		}

    @media screen and (max-width: 1000px) {
        &:hover {
			& > .SubMenu {
				opacity: 1;
				visibility: visible;
				max-height: initial;
			}
		}
    }
`;