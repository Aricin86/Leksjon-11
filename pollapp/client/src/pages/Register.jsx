import React, { useState } from 'react';
import { create } from '../utils/userService';
import { PageContent, Heading, InfoText, StyledForm, ErrorMessage, FormButton, SuccessText } from '../styled/Styled';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [validationErrorUsername, setValidationErrorUsername] = useState(null);
  const [validationErrorEmail, setValidationErrorEmail] = useState(null);
  const [validationErrorPassword, setValidationErrorPassword] = useState(null);
  const [formData, setFormData] = useState({
    username: '', 
    email: '', 
    password: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const validateUsername = () => {
    if (formData.username.length < 3 || formData.username.length > 20) {
      setValidationErrorUsername('A username need min 3 and max 20 characters.');
      return false;
    }
    setValidationErrorUsername(null);
    return true;
  };

  const validateEmail = () => {
    if (formData.email.length < 1 || !email) {
      setValidationErrorEmail('Please fill in a valid email-address.');
      return false;
    }
    setValidationErrorEmail(null);
    return true;
  };

  const validatePassword = () => {
    if (formData.password.length < 4 || formData.password.length > 25) {
      setValidationErrorPassword('A password need to be between 4 and 25 characters.');
      return false;
    }
    setValidationErrorPassword(null);
    return true;
  };

  const validateInput = () => {
    let validUsername = validateUsername();
    let validEmail = validateEmail();
    let validPassword = validatePassword();

    if (validUsername && validEmail && validPassword)
      return true;
  };

  const registerNewUser = async (theFormData) => {
    let valid = validateInput();
    if (valid) {
      const { data } = await create(theFormData);
      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess(true);
        setError(null);
      }
    }
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <PageContent>
      <Heading>Just Ask!</Heading>
      <InfoText>Make an account to create and take polls.</InfoText>
      <StyledForm onSubmit={handleSubmit(registerNewUser)}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={updateValue}
          ref={register({
            required: true,
          })}
        />
        {validationErrorUsername && <ErrorMessage>{validationErrorUsername}</ErrorMessage>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={updateValue}
          ref={register({
            required: true,
          })}
        />
        {validationErrorEmail && <ErrorMessage>{validationErrorEmail}</ErrorMessage>}
        <label htmlFor="password">Password:</label>
        <input
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={updateValue}
          ref={register({
            required: true,
          })}
        />
        {validationErrorPassword && <ErrorMessage>{validationErrorPassword}</ErrorMessage>}
        <FormButton 
          type="submit"
        >
          Sign Up
        </FormButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessText>User registered!</SuccessText>}
      </StyledForm>
      <p>Already have an account? <a href="/login">Sign in here</a>.</p>
    </PageContent>
  );
}

export default Register;
