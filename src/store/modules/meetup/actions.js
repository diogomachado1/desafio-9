export function meetupsRequest() {
  return {
    type: '@meetup/MEETUP_REQUEST',
  };
}

export function meetupsSuccess(meetups) {
  return {
    type: '@meetup/MEETUP_SUCCESS',
    payload: { meetups },
  };
}

export function meetupsFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}
