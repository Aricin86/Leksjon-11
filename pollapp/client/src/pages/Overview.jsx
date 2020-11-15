import React, { useEffect, useState } from 'react';
import { PageContent, Heading, Button } from '../styled/Styled';
import { list } from '../utils/pollService';
import PollList from '../components/PollList'

const Overview = () => {
  const [polls, setPolls] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
  <PageContent>
    <a href="/createpoll"><Button type="button">Create a Poll</Button></a>
    <Heading>Polls</Heading>
    {error && <p>{error}</p>}
    {polls && polls.length < 1 ? (
      <p>No polls created yet.</p>
    ) : (
      <PollList polls={polls} />
    )}
  </PageContent>
);
  };

export default Overview;
