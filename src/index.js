import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import {Offers} from './mocks/offers';

const container = document.getElementById(`root`);

const init = () => {
  ReactDOM.render(
      <App
        offers={Offers}
        onPlaceTitleClick={() => {}}
      />,
      container
  );
};

init();
