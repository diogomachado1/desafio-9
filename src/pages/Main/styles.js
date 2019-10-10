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
    align-items: center;
    text-align: left;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        margin-right: auto;
        font-weight: bold;
        font-size: 18px;
        text-align: left;
        > span:nth-child(2) {
          font-size: 14px;
          color: #fff7;
        }
      }
      > svg {
        color: #fff7;
      }
      @media only screen and (max-width: 450px) {
        > * + * {
          margin-top: 10px;
        }
        > span:first-child {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
`;
