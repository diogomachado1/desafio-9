import styled from 'styled-components';

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
        color: #fff7;
      }
    }
  }
`;
