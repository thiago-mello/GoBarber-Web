import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      margin: 10px 0 20px;
      border: none;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
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

    span {
      color: #ff617b;
      align-self: flex-start;
      margin-top: -6px;
      font-weight: bold;
      margin-bottom: 6px;
    }
  }

  > button {
    width: 100%;
    height: 44px;
    border: 0;
    border-radius: 4px;
    background: #f64675;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;
    margin-top: 10px;

    &:hover {
      background: ${darken(0.08, '#f64675')};
    }
  }
`;
