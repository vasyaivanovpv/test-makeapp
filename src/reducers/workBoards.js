import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const byPathNames = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.workBoards,
      };
    default:
      return state;
  }
};

const workBoardsId = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return Object.keys(action.workBoards);
    default:
      return state;
  }
};

const currentWorkBoardId = (state = '', action) => {
  switch (action.type) {
    case types.SAVE_WORKBOARD_ID:
      return action.workBoardId;
    default:
      return state;
  }
};

export default combineReducers({
  byPathNames,
  workBoardsId,
  currentWorkBoardId,
});

export const getTab = (state, workBoardId) => ({
  path: workBoardId,
  tabName: state.byPathNames[workBoardId].name,
});

export const getTabs = state =>
  state.workBoardsId.map(workBoardId => getTab(state, workBoardId));
