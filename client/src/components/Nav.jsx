import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex; 
  list-style: none;
  align-items: center;
`;

const NavMenuItem = styled.li`
  margin: 0 10px;
`;

const LogoStyle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 29px;
  letter-spacing: -2px;
  color: #333;
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <LogoStyle>JA!</LogoStyle>
      </NavMenuItem>
      <NavMenuItem>
        Overview
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
