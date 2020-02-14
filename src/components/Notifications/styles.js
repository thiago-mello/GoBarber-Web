import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: none;
  position: relative;
  transition: 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    padding: 5px;
    margin: -5px;
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 1px;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        content: '';
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 25px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
    top: -20px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    background: none;
    border: none;
    color: ${lighten(0.2, '#7159c1')};
    font-size: 12px;
    margin-top: 5px;
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff892e;
        margin-left: 5px;
      }
    `}
`;
