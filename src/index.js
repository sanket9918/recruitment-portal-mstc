import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";
import Finish from './components/end_exam.component';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App />} />
      <Route path='/finish' exact render={props => <Finish />} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);