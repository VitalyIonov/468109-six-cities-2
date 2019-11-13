import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';

import {reducer} from './reducer';

const store = createStore(
    reducer,
    window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const container = document.getElementById(`root`);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          onPlaceTitleClick={() => {}}
        />
      </Provider>,
      container
  );
};

init();
