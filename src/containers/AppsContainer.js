import { connect } from 'react-redux';
import Apps from '../components/Apps';
import { getVisibleRatingApps } from '../selectors';

const mapStateToProps = (state, props) => ({
  filteredApps: getVisibleRatingApps(state, props),
});

export default connect(mapStateToProps)(Apps);
