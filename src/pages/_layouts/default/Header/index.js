import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderContainer, Profile } from './styles';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <HeaderContainer>
      <div>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="" />
          </Link>
        </nav>
        <Profile>
          <span>{profile.name}</span>
          <Link to="/profile">Meu Perfil</Link>
        </Profile>
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </div>
    </HeaderContainer>
  );
}
