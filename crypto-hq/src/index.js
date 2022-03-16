import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoContext from './CryptoContext'

//In index.js change <React.StrictMode><App /><React.StrictMode> to <App /> and you will not see this warning. Please note that strict mode helps you with
// https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst


ReactDOM.render(
  //<React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  //</React.StrictMode>
  , document.getElementById('root')
);

