import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app';

import {reducer, sources} from './reducer';
import configureAPI from './api';


const api = configureAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
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

Promise.resolve(store.dispatch(sources.getOffers()))
  .then(() => init());
