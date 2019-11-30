import { connect } from 'react-redux';
import Tabs from '../components/Tabs';
import { getTabs } from '../reducers/workBoards';

const mapStateToProps = store => ({
  tabs: getTabs(store.workBoards),
});

export default connect(mapStateToProps)(Tabs);
