import React from 'react';
import { NavList } from '../Styled/NavList';
import { NavListLi } from '../Styled/NavListLi';
import { SubMenuLi } from '../Styled/SubMenuLi';
import { NavListA } from '../Styled/NavListA';
import   './Articles.styles.scss';
import { SubMenu } from '../Styled/SubMenu';
import { SubMenuA } from '../Styled/SubMenuA';




const RightNav = ({ open, setOpen }) => {
    return (
        <NavList open={open}>
        <NavListLi>
            <NavListA to='/competencies' onClick={() => setOpen(!open)}>Competencies</NavListA>
            <SubMenu className="SubMenu">
                <SubMenuLi>
                    <SubMenuA to='/competencies/content-strategy' onClick={() => setOpen(!open)}>Content Strategy</SubMenuA> 
                </SubMenuLi>
                <SubMenuLi>
                    <SubMenuA to='/competencies/storytelling' onClick={() => setOpen(!open)}>Storytelling</SubMenuA> 
                </SubMenuLi>
                <SubMenuLi>
                    <SubMenuA to='/competencies/marketing' onClick={() => setOpen(!open)}>marketing</SubMenuA> 
                </SubMenuLi>
            </SubMenu>
        </NavListLi>
        <NavListLi>
            <NavListA to='/clients-we-love' onClick={() => setOpen(!open)}>Clients We Love</NavListA>
        </NavListLi>
        <NavListLi>
            <NavListA to='/values' onClick={() => setOpen(!open)}>Values</NavListA>
        </NavListLi>
        <NavListLi>
        <a className='articles' href='https://www.brifiworks.com/articles' rel="noopener noreferrer">Articles</a>
        </NavListLi>
        <NavListLi>
            <NavListA to='/about' onClick={() => setOpen(!open)}>About</NavListA>
        </NavListLi>
        <NavListLi>
            <NavListA to='/contact' onClick={() => setOpen(!open)}>Contact</NavListA>
        </NavListLi>
    </NavList>
    );
}

export default RightNav;