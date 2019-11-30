import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';
import { getAllWorkBoards } from './actions';
import MainApp from './containers/MainApp';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

store.dispatch(getAllWorkBoards());

render(
  <Provider store={store}>
    <Router>
      <MainApp />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
