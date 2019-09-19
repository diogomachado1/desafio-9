import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

// import { Container } from './styles';

export default function Main() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <button type="button" onClick={handleSignOut}>
      Sair
    </button>
  );
}
