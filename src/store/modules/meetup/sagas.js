import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { meetupsSuccess, meetupsFailure } from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'organizing');
    response.data.map(item => {
      const month = format(parseISO(item.date), 'MMMM', {
        locale: pt,
      });
      const monthFomat = month.charAt(0).toUpperCase() + month.slice(1);
      console.tron.log(monthFomat);
      item.formatDate = format(
        parseISO(item.date),
        `d 'de' '${monthFomat}, às' HH'h'`,
        {
          locale: pt,
        }
      );
      return item;
    });
    yield put(meetupsSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    toast.error('Erro ao carregar a lista de Meetups!');
    yield put(meetupsFailure());
  }
}

export default all([takeLatest('@meetup/MEETUP_REQUEST', getMeetups)]);
