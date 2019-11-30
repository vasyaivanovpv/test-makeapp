import { combineReducers } from 'redux';
import workBoards from './workBoards';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  workBoards,
  visibilityFilter,
});
