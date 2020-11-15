import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 40px auto 20px auto;
  width: 300px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.default};
`;

const Footer = () => (
  <StyledFooter>
    Just Ask! &copy; 2020
  </StyledFooter>
);

export default Footer;
