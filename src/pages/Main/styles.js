import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  > div {
    :first-child {
      margin: 50px 0;
    }
    display: flex;
    justify-content: space-between;
    > span {
      font-size: 32px;
      font-weight: bold;
    }
    a > button {
      padding: 5px 15px;
      display: flex;
      align-items: center;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      > *:first-child {
        margin-right: 10px;
      }
      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }
  }
`;
export const MeetupList = styled.ul`
  list-style: none;
  li {
    > a {
      width: 100%;
      display: flex;
      background-color: #0003;
      align-items: center;
      padding: 20px 25px;
      border-radius: 5px;
      margin: 10px 0;
      > span:first-child {
        margin-right: auto;
        font-weight: bold;
        font-size: 18px;
      }
      > span:nth-child(2) {
        margin-right: 20px;
        color: #fffa;
      }
    }
  }
`;
