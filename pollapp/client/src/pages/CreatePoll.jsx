import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { create } from '../utils/pollService';
import {
  PageContent,
  Heading,
  StyledForm,
  ErrorMessage,
  FormButton,
  SuccessText,
} from '../styled/Styled';

const CreatePoll = () => {
  const [validationErrorTitle, setValidationErrorTitle] = useState(null);
  const [validationErrorQuestion, setValidationErrorQuestion] = useState(null);
  const [validationErrorChoice1, setValidationErrorChoice1] = useState(null);
  const [validationErrorChoice2, setValidationErrorChoice2] = useState(null);
  const [formData, setFormData] = useState({
    title: '', 
    question: '', 
    choice1: '',
    choice2: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const validateTitle = () => {
    if (formData.title.length < 3 || formData.title.length > 40) {
      setValidationErrorTitle('A title need to be between 3 and 40 characters.');
      return false;
    }
    setValidationErrorTitle(null);
    return true;
  };

  const validateQuestion = () => {
    if (formData.question.length < 6 || formData.question.length > 250) {
      setValidationErrorQuestion('A question need to be between 6 and 250 characters.');
      return false;
    }
    setValidationErrorTitle(null);
    return true;
  };

  const validateChoice1 = () => {
    if (formData.choice1.length < 1 || formData.choice1.length > 100) {
      setValidationErrorChoice1('A choice need to be between 1 and 100 characters.');
      return false;
    }
    setValidationErrorTitle(null);
    return true;
  };

  const validateChoice2 = () => {
    if (formData.choice2.length < 1 || formData.choice2.length > 100) {
      setValidationErrorChoice2('A choice need to be between 1 and 100 characters.');
      return false;
    }
    setValidationErrorTitle(null);
    return true;
  };

  const validateInput = () => {
    let validTitle = validateTitle();
    let validQuestion = validateQuestion();
    let validChoice1 = validateChoice1();
    let validChoice2 = validateChoice2();

    if (validTitle && validQuestion && validChoice1 && validChoice2)
      return true;
  };

  const createPoll = async (theFormData) => {
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
      <Heading>Create a Poll</Heading>
      <StyledForm onSubmit={handleSubmit(createPoll)}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={updateValue}
          ref={register({
            required: true,
          })}
        />
        {validationErrorTitle && <ErrorMessage>{validationErrorTitle}</ErrorMessage>}
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={formData.question}
          onChange={updateValue}
          ref={register({
            required: true,
          })}
        />
        {validationErrorQuestion && <ErrorMessage>{validationErrorQuestion}</ErrorMessage>}
        <label htmlFor="choice1">Choice #1:</label>
        <input
          type="text" 
          id="choice1" 
          name="choice1" 
          value={formData.choice1} 
          onChange={updateValue}
        />
        {validationErrorChoice1 && <ErrorMessage>{validationErrorChoice1}</ErrorMessage>}
        <label htmlFor="choice2">Choice #2:</label>
        <input
          type="text" 
          id="choice2" 
          name="choice2" 
          value={formData.choice2} 
          onChange={updateValue}
        />
        {validationErrorChoice2 && <ErrorMessage>{validationErrorChoice2}</ErrorMessage>}
        <FormButton 
          type="submit"
        >
          Create Poll
        </FormButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessText>Poll Created!</SuccessText>}
      </StyledForm>
    </PageContent>
  );
};

export default CreatePoll;
