import styled from 'styled-components';

export const PageContent = styled.section`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.default};
`;

export const Heading = styled.h1`
  margin-bottom: 0;
  color: ${({ theme: { colors } }) => colors.default};
`;

export const InfoText = styled.p`
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.info};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme: { colors } }) => colors.warning};
`;

export const SuccessText = styled.h6`
  grid: 1 / 3;
  margin: 20px 0 40px 0;
  color: ${({ theme: { colors } }) => colors.success};
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto 170px;
  & > label {
    margin: 20px 0 0 0;
    font-size: 1.25rem;
    text-align: left;
  }
  & > input {
    margin: 20px 0 0 0;
    padding: 0 5px;
    height: 27px;
    /* outline-style: none; */
    border: 1px solid;
    border-color: ${({ theme: { colors } }) => colors.default};
    grid-column: 2;
    &:hover {
      background: #eee;
    }
    &:focus {
      background: #ccc;
    }
  }
  & > p {
    text-align: left;
    margin: 0;
    padding: 0;
    grid-column: 2;
  }
`;

export const Button = styled.button`
  margin: 30px 0 20px 0;
  padding: 10px 30px;
  background: ${({ theme: { colors } }) => colors.default};
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-variant: small-caps;
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background: #505050;
  }
  &:active {
    background: #303030;
  }
`;

export const FormButton = styled(Button)`
  grid-column: 1 / 3;
  justify-self: center;
`;

export const CardButton = styled(Button)`
  margin: 15px auto 5px auto;
`;

export const StyledPollCard = styled.article`
  padding: 10px;
  margin: 20px 0;
  width: 100%;
  border: 1px solid;
  display: grid;
  grid-template-rows: auto auto auto;
  text-align: left;
  & > p {
    margin: 10px 0 5px 0;
  }
`;
