import React from 'react';
import PollCard from './PollCard';

const PollList = ({ polls }) => (
  <>
    {polls && 
      polls.length > 0 &&
      polls.map((poll) => (
          <PollCard
            key={poll.id}
            poll={poll}
          />
    ))}
  </>
);

export default PollList;
