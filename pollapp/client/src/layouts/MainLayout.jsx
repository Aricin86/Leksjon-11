import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const StyledLine = styled.hr`
  margin: 0 auto;
  width: 300px;
  border: 1px solid;
  color: #bbb;
  box-shadow: 0px 3px 6px #ddd;
`;

const StyledMain = styled.main`
  margin: 0 auto;
  width: 300px;
  padding: 10px;
`;

const MainLayout = ({ children }) => (
  <>
    <Nav />
    <StyledLine />
    <StyledMain>
      {children}
    </StyledMain>
    <Footer />
  </>
);

export default MainLayout;
