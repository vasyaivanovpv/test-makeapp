import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkWrap = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: 8px 18px;
  background: #e8e8e8 0% 0% no-repeat padding-box;
  font-family: MuseoSansCyrl;
  font-weight: 500;
  color: #979898;
  border-radius: 13px 13px 0 0;
  text-decoration: none;
  &.active {
    z-index: 9;
    span {
      background: #ffffff;
    }
  }
  :nth-child(1) {
    span {
      :nth-child(1) {
        display: none;
      }
    }
  }
  :nth-last-child(1) {
    span {
      :nth-child(2) {
        ::before {
          background: #f1f1f5;
        }
      }
    }
  }
`;
const NavLinkHelper = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  width: 13px;
  height: 13px;
  background: #e8e8e8;
  overflow: hidden;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #e8e8e8;
  }
  :nth-child(1) {
    left: 0;
    transform: translateX(-100%);
    ::before {
      border-radius: 0 0 13px 0;
    }
  }
  :nth-child(2) {
    right: 0;
    transform: translateX(100%);
    ::before {
      border-radius: 0 0 0 13px;
    }
  }
`;

const style = {
  activeNavLink: {
    color: '#1D353D',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
  },
};

const Tab = ({ pathName, tabName }) => (
  <NavLinkWrap to={`/${pathName}`} activeStyle={style.activeNavLink}>
    {tabName}
    <NavLinkHelper />
    <NavLinkHelper />
  </NavLinkWrap>
);

export default Tab;
