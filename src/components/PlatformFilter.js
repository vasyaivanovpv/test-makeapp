import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import styled from 'styled-components';
import { SHOW_ALL, SHOW_ANDROID, SHOW_IOS } from '../constants/Filters';
import { ReactComponent as Android } from '../images/svg/svg_android.svg';
import { ReactComponent as Apple } from '../images/svg/svg_apple.svg';

const FILTER_TITLES = {
  [SHOW_ALL]: 'Все',
  [SHOW_IOS]: <Apple />,
  [SHOW_ANDROID]: <Android />,
};

const PlatformFilterWrap = styled.div`
  width: 202px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-right: 16px;
`;
const PlatformFilterTitle = styled.div`
  font: 500 15px/29px MuseoSansCyrl;
  color: #1d353d;
`;
const PlatformFilterLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`;

const PlatformFilter = ({ children }) => (
  <PlatformFilterWrap>
    <PlatformFilterTitle>{children}</PlatformFilterTitle>
    <PlatformFilterLinks>
      {Object.keys(FILTER_TITLES).map(filter => (
        <FilterLinkContainer key={filter} filter={filter}>
          {FILTER_TITLES[filter]}
        </FilterLinkContainer>
      ))}
    </PlatformFilterLinks>
  </PlatformFilterWrap>
);

export default PlatformFilter;
