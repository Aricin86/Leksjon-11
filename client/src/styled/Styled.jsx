import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ theme: { colors } }) => colors.default};
`;

export const PageContent = styled.section`
  padding: 20px;
`;
