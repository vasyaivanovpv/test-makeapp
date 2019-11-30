import * as types from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/Filters';

const visibilityFilter = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return Object.keys(action.workBoards).map(workBoardId => ({
        workBoardId: workBoardId,
        filters: {
          byPlatform: SHOW_ALL,
          byRating: '',
        },
      }));
    case types.SET_FILTER_BY_PLATFORM:
      return state.map(workBoard => {
        if (workBoard.workBoardId === action.payload.currentWorkBoardId) {
          return {
            workBoardId: workBoard.workBoardId,
            filters: {
              byPlatform: action.payload.filter,
              byRating: workBoard.filters.byRating,
            },
          };
        }
        return workBoard;
      });
    case types.SET_FILTER_BY_RATING:
      return state.map(workBoard => {
        if (workBoard.workBoardId === action.payload.currentWorkBoardId) {
          return {
            workBoardId: workBoard.workBoardId,
            filters: {
              byPlatform: workBoard.filters.byPlatform,
              byRating: action.payload.filter,
            },
          };
        }
        return workBoard;
      });
    default:
      return state;
  }
};

export default visibilityFilter;

export const getFilterValue = state => {
  let filteredWorkBoard = state.visibilityFilter.filter(
    workBoard => workBoard.workBoardId === state.workBoards.currentWorkBoardId
  );

  return filteredWorkBoard.length > 0
    ? filteredWorkBoard[0]
    : state.visibilityFilter[0];
};
