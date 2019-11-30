import React from 'react';
import App from './App';
import styled from 'styled-components';

const AppsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const Apps = ({ filteredApps }) => (
  <AppsWrap>
    {filteredApps.map(app => (
      <App key={app.categoryPosition} app={app} />
    ))}
  </AppsWrap>
);

export default Apps;
