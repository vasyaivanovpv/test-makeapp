import * as types from '../constants/ActionTypes';
import workBoards from '../api';

export const getAllWorkBoards = () => dispatch => {
  workBoards.getWorkBoards(workBoards => {
    dispatch({
      type: types.RECEIVE_PRODUCTS,
      workBoards,
    });
  });
};

export const setVisibilityFilterByPlatfrom = (filter, currentWorkBoardId) => ({
  type: types.SET_FILTER_BY_PLATFORM,
  payload: { filter, currentWorkBoardId },
});
export const setVisibilityFilterByRating = (filter, currentWorkBoardId) => ({
  type: types.SET_FILTER_BY_RATING,
  payload: { filter, currentWorkBoardId },
});

export const saveCurrentWorkBoardId = workBoardId => ({
  type: types.SAVE_WORKBOARD_ID,
  workBoardId,
});
