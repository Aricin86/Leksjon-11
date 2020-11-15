import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const StyledNav = styled.nav`
  margin: 0 auto;
  width: 300px;
  color: ${({ theme: { colors } }) => colors.default};
`;

const NavMenu = styled.ul`
  margin: 10px 0;
  padding: 0;
  display: flex; 
  list-style: none;
  align-items: center;
`;

const NavMenuItem = styled.li`
  margin: 0 10px;
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <Logo />
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/">
          Overview
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/register">
          Register
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/createpoll">
          Create
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
