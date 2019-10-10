import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { meetupsSuccess, meetupsFailure } from './actions';
import formatDate from '~/util/formatDate';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'organizing');
    response.data.map(item => {
      item.formatDate = formatDate(item.date);
      return item;
    });
    yield put(meetupsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao carregar a lista de Meetups!');
    yield put(meetupsFailure());
  }
}

export default all([takeLatest('@meetup/MEETUP_REQUEST', getMeetups)]);
