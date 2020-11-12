import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex; 
  list-style: none;
  align-items: center;
`;

const NavMenuItem = styled.li`
  padding: 0 10px;
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        Logo
      </NavMenuItem>
      <NavMenuItem>
        Overview
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
