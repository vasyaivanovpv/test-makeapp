import { connect } from 'react-redux';
import { setVisibilityFilterByPlatfrom } from '../actions';
import FilterLink from '../components/FilterLink';
import { getFilterValue } from '../reducers/visibilityFilter';

const mapStateToProps = (state, props) => ({
  active: props.filter === getFilterValue(state).filters.byPlatform,
  currentWorkBoardId: state.workBoards.currentWorkBoardId,
});

const mapDispatchToProps = (dispatch, props) => ({
  setFilter: currentWorkBoardId =>
    dispatch(setVisibilityFilterByPlatfrom(props.filter, currentWorkBoardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
