import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import WorkBoardContainer from '../containers/WorkBoardContainer';

const WorkBoardsContainer = ({ workBoards, workBoardsId }) => (
  <Switch>
    {workBoardsId.map(workBoardId => (
      <Route
        key={workBoardId}
        path={`/${workBoardId}`}
        render={() => (
          <WorkBoardContainer
            workBoard={workBoards[workBoardId]}
            workBoardId={workBoardId}
          />
        )}
      />
    ))}
  </Switch>
);

WorkBoardsContainer.propTypes = {
  workBoards: PropTypes.object.isRequired,
  workBoardsId: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  workBoards: store.workBoards.byPathNames,
  workBoardsId: store.workBoards.workBoardsId,
});

export default connect(mapStateToProps)(WorkBoardsContainer);
