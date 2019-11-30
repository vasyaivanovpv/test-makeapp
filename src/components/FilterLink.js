import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 34px;
  background: ${props =>
    props.active
      ? '#3469F2 0% 0% no-repeat padding-box'
      : '#f1f1f5 0% 0% no-repeat padding-box'};
  border-radius: 10px;
  line-height: 34px;
  text-align: center;
  cursor: pointer;
  color: ${props => (props.active ? '#FFFFFF' : '#979898')};
  svg {
    fill: ${props => (props.active ? '#FFFFFF' : '#979898')};
  }
  &:nth-child(2) {
    svg {
      transform: translateY(-1px);
    }
    ::before,
    ::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 0px;
      height: 18px;
      border: 1px solid #e8e8e8;
    }
    ::before {
      left: -10px;
    }
    ::after {
      right: -10px;
    }
  }
`;

const FilterLink = ({ active, children, setFilter, currentWorkBoardId }) => {
  const handleClick = () => {
    setFilter(currentWorkBoardId);
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link onClick={handleClick} active={active}>
      {children}
    </Link>
  );
};
export default FilterLink;
