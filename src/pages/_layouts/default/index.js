import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Wrapper, Content } from './styles';
import Header from './Header';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Header />

      <PerfectScrollbar>
        <Content>{children}</Content>
      </PerfectScrollbar>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
