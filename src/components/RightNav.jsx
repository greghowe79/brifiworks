import React from 'react';
import { NavList } from '../Styled/NavList';
import { NavListLi } from '../Styled/NavListLi';
import { SubMenuLi } from '../Styled/SubMenuLi';
import { NavListA } from '../Styled/NavListA';
import { SubMenu } from '../Styled/SubMenu';
import { SubMenuA } from '../Styled/SubMenuA';



const RightNav = ({ open }) => {
    return (
        <NavList open={open}>
        <NavListLi>
            <NavListA to='/competencies'>Competencies.</NavListA>
            <SubMenu className="SubMenu">
                <SubMenuLi>
                    <SubMenuA to='/competencies/content-strategy'>Content Strategy</SubMenuA> 
                </SubMenuLi>
                <SubMenuLi>
                    <SubMenuA to='/competencies/storytelling'>Storytelling</SubMenuA> 
                </SubMenuLi>
                <SubMenuLi>
                    <SubMenuA to='/competencies/marketing'>marketing</SubMenuA> 
                </SubMenuLi>
            </SubMenu>
        </NavListLi>
        <NavListLi>
            <NavListA to='/clients-we-love'>Clients We Love.</NavListA>
        </NavListLi>
        <NavListLi>
            <NavListA to='/values'>Values.</NavListA>
            <SubMenu className="SubMenu">
                <SubMenuLi>
                    <SubMenuA to='/values/authenticity'>Authenticity</SubMenuA> 
                </SubMenuLi>
                <SubMenuLi>
                    <SubMenuA to='/values/integrity'>Integrity</SubMenuA> 
                </SubMenuLi>
                <SubMenuLi>
                    <SubMenuA to='/values/togetherness'>Togetherness</SubMenuA> 
                </SubMenuLi>
            </SubMenu>
        </NavListLi>
        <NavListLi>
            <NavListA to='/articles'>Articles.</NavListA>
        </NavListLi>
        <NavListLi>
            <NavListA to='/about'>About.</NavListA>
        </NavListLi>
        <NavListLi>
            <NavListA to='/contact'>Contact.</NavListA>
        </NavListLi>
    </NavList>
    );
}

export default RightNav;