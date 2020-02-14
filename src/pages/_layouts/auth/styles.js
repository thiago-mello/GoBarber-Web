import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 44px;
      border: 0;
      border-radius: 4px;
      background: #3b9eff;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      opacity: 0.7;
      margin-top: 15px;
      font-size: 16px;
      width: fit-content;
      align-self: center;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: #ff617b;
      align-self: flex-start;
      margin-top: -6px;
      font-weight: bold;
      margin-bottom: 6px;
    }
  }
`;
