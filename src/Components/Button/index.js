import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  padding: ${({ padding }) => padding || '10px 20px'};
  display: flex;
  align-items: center;
  background: ${({ color }) => color || '#f94d6a'};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  > svg {
    margin-right: 10px;
  }
  &:hover {
    background: ${({ color }) => darken(0.08, color || '#f94d6a')};
  }
  @media only screen and (max-width: 600px) {
    > svg {
      margin-right: 0;
    }
    > span {
      display: none;
    }
  }
`;
