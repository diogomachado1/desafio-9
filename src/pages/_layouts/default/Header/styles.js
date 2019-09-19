import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 30px;
  background-color: #000;
  display: flex;
  justify-content: center;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 900px;
    > nav > a > img {
      width: 32px;
    }
    > button {
      padding: 7px 15px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }
  }
`;

export const Profile = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #fff;
  > span {
    font-weight: bold;
  }
  > a {
    color: #fff;
    margin-top: 3px;
    font-size: 10px;
    text-decoration: none;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
