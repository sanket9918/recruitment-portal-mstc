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
    const waitingSW = registration.waiting;

    if (waitingSW) {
      waitingSW.addEventListener("statechange", event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
      waitingSW.postMessage({ type: "SKIP_WAITING" })
    }
  }
});