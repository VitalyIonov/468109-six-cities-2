import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';

import {reducer} from './reducer';

const store = createStore(reducer);

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
