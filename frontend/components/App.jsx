import React from 'react';
import { Route } from 'react-router-dom';
import Greeting from './greeting/greeting';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Greeting} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>

  );
};

export default App;
