import { connect } from 'react-redux';
import { setVisibilityFilterByRating } from '../actions';
import RatingFilter from '../components/RatingFilter';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
  currentWorkBoardId: state.workBoards.currentWorkBoardId,
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, props) => ({
  setFilter: (filter, currentWorkBoardId) =>
    dispatch(setVisibilityFilterByRating(filter, currentWorkBoardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingFilter);
