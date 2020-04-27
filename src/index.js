import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";
import Finish from './components/end_exam.component';
import CandProfile from './components/user_overview.component';


ReactDOM.render(
  <BrowserRouter basename={`${process.env.PUBLIC_URL}/`} >
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/finish' exact render={props => <Finish {...props} />} />
      <Route path='/overview' exact render={props => <CandProfile {...props} />} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);