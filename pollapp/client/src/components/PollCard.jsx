import React from 'react';
import { StyledPollCard, CardButton } from '../styled/Styled';

const PollCard = ({ poll }) => (
  <StyledPollCard>
    <h6>{poll.title}</h6>
    <p>Pollster: {poll.pollster.username}</p>
    <p>Created: {new Date(poll.createdAt).toDateString()}</p>
    <CardButton type="button">Take Poll</CardButton>
  </StyledPollCard>
);

export default PollCard;
