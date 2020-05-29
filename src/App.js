import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/hero-login.component';
import Navbar1 from './components/navbar.component';
import Footer from './components/footer.component';
import Finish from './components/end_exam.component';
import CandProfile from './components/user_overview.component';
import OrgSignUp from './components/org_signup.component';
import UserSignUp from './components/candidate_signup.component';
import Exam from './components/quiz/exam.component';
import OrgManage from './components/OrgManage/Org_manage.component';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'


import Error from './components/error.component'
import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser, logout } from './actions/authActions';
import setAuthToken from './utils/setAuthToken'


import jwt_decode from "jwt-decode";



if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "./"
  }
}


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar1 />
            <Route path='/' exact render={props => <Login {...props} />} />
            <Route path='/finish' exact render={props => <Finish {...props} />} />
            <Route path='/overview' exact render={props => <CandProfile {...props} />} />
            <Route path='/orgsignup' exact render={props => <OrgSignUp {...props} />} />
            <Route path='/candsignup' exact render={props => <UserSignUp {...props} />} />
            <Route path='/exam' exact render={props => <Exam {...props} />} />
            <Route path='/orgmanage' exact render={props => <OrgManage {...props} />} />
            {/* <Route component={Error} /> */}
           
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
