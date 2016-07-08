import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';

import App from './App';


const holderDiv = document.createElement('div');
document.body.appendChild(holderDiv);

ReactDOM.render(
  <AppContainer errorReporter={Redbox}>
    <App />
  </AppContainer>,
  holderDiv);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      holderDiv);
  });
}
