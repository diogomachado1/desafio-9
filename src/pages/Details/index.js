import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdLocationOn, MdEvent } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, Content, Img } from './styles';
import { Button } from '~/Components/Button';
import formatDate from '~/util/formatDate';

class Meetup {
  File = { url: '', name: '' };
}
export default function Details(props) {
  const [meetup, setMeetup] = useState(new Meetup());
  const { match, history } = props;

  const initFetch = useCallback(async () => {
    const response = await api.get(`/meetup/${match.params.meetupId}`);

    setMeetup({ ...response.data });
  }, [match.params.meetupId]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  async function cancelMeetup() {
    await api.delete(`/meetup/${match.params.meetupId}`);
    history.push('/dashboard');
  }
  return (
    <Container>
      <div>
        <span>{meetup.title}</span>
        <Link to={`/meetup/edit/${meetup.id}`}>
          <Button color="#4DBAF9" type="button">
            <MdEdit size="20" />
            Editar
          </Button>
        </Link>
        <Button onClick={cancelMeetup} type="button">
          <MdDeleteForever size="20" />
          Cancelar
        </Button>
      </div>
      <Content>
        <Img src={meetup.File.url} />
        <span>{meetup.description}</span>
        <div>
          <span>
            <MdEvent size="20" />
            <span>{meetup.date && formatDate(meetup.date)}</span>
          </span>
          <span>
            <MdLocationOn size="20" />
            <span>{meetup.location}</span>
          </span>
        </div>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
