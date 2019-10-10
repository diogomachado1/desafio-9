import React, { useEffect, useCallback, useState } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, MeetupList } from './styles';
import { Button } from '~/Components/Button';
import api from '~/services/api';
import formatDate from '~/util/formatDate';

export default function Main() {
  const [meetups, setMeetups] = useState([]);

  const initFetch = useCallback(async () => {
    const response = await api.get(`/meetup`);
    setMeetups(response.data);
  }, []);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <Container>
      <div>
        <span>Meus meetups</span>
        <Link to="/meetup/create">
          <Button type="button">
            <MdAddCircleOutline size="20" />
            <span>Novo Meetup</span>
          </Button>
        </Link>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <Link to={`/details/${meetup.id}`}>
              <span>
                <span>{meetup.title}</span>
                <span>{formatDate(meetup.date)}</span>
              </span>
              <MdChevronRight size="30" />
            </Link>
          </li>
        ))}
      </MeetupList>
    </Container>
  );
}
