import React from 'react';
import { Route } from 'react-router-dom';
import Greeting from './greeting/greeting';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AppContainer from './tasks/app_container';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Greeting} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/app" component={AppContainer} />
    </div>

  );
};

export default App;
