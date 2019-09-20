import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Main from '../pages/Main';
import Details from '~/pages/Details';
import Meetup from '~/pages/Meetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Main} isPrivate />
      <Route path="/details/:meetupId" component={Details} isPrivate />
      <Route path="/meetup/create" component={Meetup} isPrivate />
      <Route path="/meetup/edit/:meetupId" component={Meetup} isPrivate />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  );
}
