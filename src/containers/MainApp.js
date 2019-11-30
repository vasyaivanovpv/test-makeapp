import React from 'react';
import TabsContainer from './TabsContainer';
import WorkBoardsContainer from './WorkBoardsContainer';
import styled, { createGlobalStyle } from 'styled-components';
import '../fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  body {
    background: #F1F1F5 0% 0% no-repeat padding-box;
  }
`;
const MainAppWrap = styled.div`
  width: 856px;
  margin: 0 auto;
`;

const MainApp = () => (
  <MainAppWrap>
    <GlobalStyle />
    <TabsContainer />
    <WorkBoardsContainer />
  </MainAppWrap>
);

export default MainApp;
