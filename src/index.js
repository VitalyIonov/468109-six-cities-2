import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const container = document.getElementById(`root`);

const init = () => {
  ReactDOM.render(
      <App
        realty={[
          `Beautiful & luxurious apartment at great location`,
          `Wood and stone place`,
          `Canal View Prinsengracht`,
          `Nice, cozy, warm big bed apartment`]}
      />,
      container
  );
};

init();
