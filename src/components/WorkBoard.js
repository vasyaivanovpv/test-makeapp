import React, { useEffect } from 'react';
import AppsContainer from '../containers/AppsContainer';
import styled from 'styled-components';
import PlatformFilter from './PlatformFilter';
import RatingFilterContainer from '../containers/RatingFilterContainer';

const WorkBoardWrap = styled.div``;
const FilterPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100px;
  margin-bottom: 23px;
  padding: 14px 18px 16px 18px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px 16px 16px 16px;
`;

const WorkBoard = ({
  workBoard,
  workBoardId,
  saveCurrentWorkBoardId,
  currentWorkBoardId,
}) => {
  useEffect(() => {
    saveCurrentWorkBoardId(workBoardId);
  }, [saveCurrentWorkBoardId, workBoardId]);
  return (
    <WorkBoardWrap>
      <FilterPanel>
        <PlatformFilter>Фильтр</PlatformFilter>
        <RatingFilterContainer workBoardId={workBoardId}>
          Рейтинг
        </RatingFilterContainer>
      </FilterPanel>
      {!!currentWorkBoardId && <AppsContainer apps={workBoard.applications} />}
    </WorkBoardWrap>
  );
};

export default WorkBoard;
