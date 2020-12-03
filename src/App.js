import React from "react";
import "./App.css";
import Login from "./components/hero-login.component";
import Error from "./components/error.component";
import Error1 from "./components/error1.component";
import Navbar1 from "./components/navbar.component";
import Finish from "./components/end_exam.component";
import CandProfile from "./components/user_overview.component";
import OrgSignUp from "./components/org_signup.component";
import UserSignUp from "./components/candidate_signup.component";
import Exam from "./components/quiz/exam.component";
import OrgManage from "./components/OrgManage/Org_manage.component";
import ErrorDisable from './components/error_test_off.component';
import ErrorExamNotStarted from './components/error_test_not_started.component'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <div>
            <Navbar1 />
            <Switch>
              <ProtectedRoute exact path="/overview" component={CandProfile} />
              <ProtectedRoute path="/exam" exact component={Exam} />
              <ProtectedRoute path="/orgmanage" exact component={OrgManage} />
              <ProtectedRoute path="/finish" exact component={Finish} />

              <Route path="/" exact render={(props) => <Login {...props} />} />
              <Route
                path="/error1"
                exact
                render={(props) => <Error1 {...props} />}
              />
              <Route
                path="/error"
                exact
                render={(props) => <Error {...props} />}
              />
              <Route
                path="/orgsignup"
                exact
                render={(props) => <OrgSignUp {...props} />}
              />
              <Route
                path="/candsignup"
                exact
                render={(props) => <UserSignUp {...props} />}
              />
              <Route
                path="/error-disable"
                exact
                render={(props) => <ErrorDisable {...props} />}
              />
              <Route
                path="/error-test"
                exact
                render={(props) => <ErrorExamNotStarted {...props} />}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
