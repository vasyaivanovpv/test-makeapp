import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { SHOW_FROM_2, SHOW_FROM_3, SHOW_FROM_4 } from '../constants/Filters';
import { ReactComponent as Star } from '../images/svg/svg_star.svg';

const StarWrap = styled(Star)`
  width: 15px;
  fill: #f8bf25;
  margin-bottom: 2px;
`;

const LabelOptionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  span {
    margin-right: 4px;
  }
`;
const LabelOptions = ({ label }) => (
  <LabelOptionsWrap>
    <span>{label}</span>
    <StarWrap />
  </LabelOptionsWrap>
);

const selectStyle = {
  control: (styled, { isSelected, isFocused }) => ({
    ...styled,
    height: '34px',
    minHeight: '34px',
    background: '#F1F1F5 0% 0% no-repeat padding-box',
    borderRadius: '10px',
    border: isSelected ? 'none' : 'none',
    boxShadow: isSelected ? '0px -10px 10px -10px #00000029' : 'none',
    cursor: 'pointer',
    zIndex: '9',
  }),
  placeholder: styled => ({
    ...styled,
    padding: '8px 12px 8px 18px',
    margin: '0',
    font: '500 15px/18px MuseoSansCyrl',
    color: '#979898',
  }),
  singleValue: styled => ({
    ...styled,
    padding: '8px 12px 8px 18px',
    color: '#979898',
  }),
  valueContainer: styled => ({
    ...styled,
    padding: '0',
  }),
  option: (styled, { isFocused, isSelected }) => ({
    ...styled,
    height: '30px',
    padding: '8px 12px 8px 18px',
    cursor: 'pointer',
    color: isFocused ? '#FFFFFF' : '#979898',
    font: '500 15px/15px MuseoSansCyrl',
    background: isFocused ? '#3469F2 0% 0% no-repeat padding-box' : 'none',
  }),
  indicatorSeparator: styled => ({ display: 'none' }),
  menu: styled => ({
    ...styled,
    paddingTop: '20px',
    top: '20px',
    background: '#F1F1F5 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 15px 0px #00000029',
    borderRadius: '0 0 10px 10px',
    margin: '0',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    svg: {
      width: '10px',
    },
  }),
};

const RatingFilterWrap = styled.div`
  width: 202px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-right: 16px;
`;
const RatingFilterTitle = styled.div`
  font: 500 15px/29px MuseoSansCyrl;
  color: #1d353d;
`;

const selectOptions = [
  { value: SHOW_FROM_4, label: <LabelOptions label="от 4,0" /> },
  { value: SHOW_FROM_3, label: <LabelOptions label="от 3,0" /> },
  { value: SHOW_FROM_2, label: <LabelOptions label="от 2,0" /> },
];

const RatingFilter = ({
  children,
  setFilter,
  workBoardId,
  visibilityFilter,
  currentWorkBoardId,
}) => {
  const getDefaultValue = () => {
    const filteredWorkBoards =
      workBoardId === currentWorkBoardId
        ? visibilityFilter.filter(
            workBoard => workBoard.workBoardId === workBoardId
          )
        : [];
    const currentFilter =
      filteredWorkBoards.length > 0
        ? filteredWorkBoards[0].filters.byRating
        : null;

    const defaultFilterValue = selectOptions.filter(
      option => option.value === currentFilter
    );
    return defaultFilterValue.length > 0 ? defaultFilterValue[0] : '';
  };
  const handleChange = option => {
    setFilter(option.value, currentWorkBoardId);
  };

  return (
    <RatingFilterWrap>
      <RatingFilterTitle>{children}</RatingFilterTitle>
      {workBoardId === currentWorkBoardId && (
        <Select
          defaultValue={getDefaultValue()}
          onChange={handleChange}
          options={selectOptions}
          placeholder="Выбрать"
          isSearchable={false}
          isClearable={false}
          styles={selectStyle}
        />
      )}
    </RatingFilterWrap>
  );
};

export default RatingFilter;
