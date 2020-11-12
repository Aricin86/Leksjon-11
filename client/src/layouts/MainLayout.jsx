import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const StyledMain = styled.main`
  background: #ccc;
  width: 80%;
  margin: 0 auto;
`;

const MainLayout = ({ children }) => (
  <>
    <Nav />
    <StyledMain>
      {children}
    </StyledMain>
  </>
);

export default MainLayout;
