import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const container = document.getElementById(`root`);

const init = () => {
  ReactDOM.render(<App />, container);
};

init();
