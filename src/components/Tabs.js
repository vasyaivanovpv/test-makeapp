import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';

const TabsWrap = styled.div`
  margin-top: 50px;
`;

const Tabs = ({ tabs }) => (
  <TabsWrap>
    {tabs.map(tab => (
      <Tab key={tab.path} tabName={tab.tabName} pathName={tab.path} />
    ))}
  </TabsWrap>
);
export default Tabs;
