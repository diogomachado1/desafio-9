import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, MeetupList } from './styles';
import { meetupsRequest } from '~/store/modules/meetup/actions';
import { Button } from '~/Components/Button';

export default function Main() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  const initFetch = useCallback(() => {
    dispatch(meetupsRequest());
  }, [dispatch]);

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
            Novo Meetup
          </Button>
        </Link>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <Link to={`/details/${meetup.id}`}>
              <span>{meetup.title}</span>
              <span>{meetup.formatDate}</span>
              <MdChevronRight size="30" />
            </Link>
          </li>
        ))}
      </MeetupList>
    </Container>
  );
}
