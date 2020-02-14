import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #e6e6e6;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #e6e6e6;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      width: fit-content;
      align-self: flex-end;
    }
  }

  img {
    width: 42px;
    border-radius: 50%;
  }
`;
