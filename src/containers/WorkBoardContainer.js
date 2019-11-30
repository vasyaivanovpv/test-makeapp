import { connect } from 'react-redux';
import WorkBoard from '../components/WorkBoard';
import { saveCurrentWorkBoardId } from '../actions';

const mapStateToProps = state => ({
  currentWorkBoardId: state.workBoards.currentWorkBoardId,
});

const mapDispatchToProps = dispatch => ({
  saveCurrentWorkBoardId: workBoardId =>
    dispatch(saveCurrentWorkBoardId(workBoardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkBoard);
