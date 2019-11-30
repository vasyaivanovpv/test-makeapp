import { createSelector } from 'reselect';
import { toNumber } from '../utils';
import {
  SHOW_ALL,
  SHOW_ANDROID,
  SHOW_IOS,
  SHOW_FROM_2,
  SHOW_FROM_3,
  SHOW_FROM_4,
} from '../constants/Filters';

const getApps = (state, props) => props.apps;
const getVisibilityFilterByPlatform = state => {
  const filteredWorkBoards = state.visibilityFilter.filter(
    workBoard => workBoard.workBoardId === state.workBoards.currentWorkBoardId
  );
  return filteredWorkBoards[0].filters.byPlatform;
};

const getVisibilityFilterByRating = state => {
  const filteredWorkBoards = state.visibilityFilter.filter(
    workBoard => workBoard.workBoardId === state.workBoards.currentWorkBoardId
  );
  return filteredWorkBoards[0].filters.byRating;
};

export const getVisibleApps = createSelector(
  [getVisibilityFilterByPlatform, getApps],
  (visibilityFilter, apps) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return apps;
      case SHOW_ANDROID:
        return apps.filter(app => app.platform === 'android');
      case SHOW_IOS:
        return apps.filter(app => app.platform === 'iphone');
      default:
        throw new Error(`Unknown filter: ${visibilityFilter}`);
    }
  }
);

export const getVisibleRatingApps = createSelector(
  [getVisibilityFilterByRating, getVisibleApps],
  (visibilityFilterRating, apps) => {
    switch (visibilityFilterRating) {
      case SHOW_FROM_2:
        return apps.filter(
          app => toNumber(app.rating) >= 2 && toNumber(app.rating) < 3
        );
      case SHOW_FROM_3:
        return apps.filter(
          app => toNumber(app.rating) >= 3 && toNumber(app.rating) < 4
        );
      case SHOW_FROM_4:
        return apps.filter(app => {
          return toNumber(app.rating) >= 4 && toNumber(app.rating) <= 5;
        });
      default:
        return apps;
    }
  }
);
