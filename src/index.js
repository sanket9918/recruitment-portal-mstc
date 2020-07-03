import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);

serviceWorker.register({
  onUpdate: registration => {
    alert('New Version of EasyRecruit is available. Please update to latest version');
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });

    }
    window.location.reload();
  }
})