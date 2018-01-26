import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  componentWillMount() {
    this.props.clearErrors();
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({ user });
  }

  demoLogin() {
    this.props.login({user: {username:'demo_login', password:'demopassword'}});
  }

  errors() {
    if (this.props.errors) {
      return (
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }


  render() {
    return (
      <div className="container">
        <section className="blue">
          <div className="auth-logo">
            <p>Ztasks</p>
          </div>
        </section>
        <div className="login-form-container">
          <br/>
          <div className="login-form-box">
            <form onSubmit={this.handleSubmit}>
              <Link className="link-button" onClick={this.clearErrors} to="/signup">Sign up for free</Link>
              <h1>Been here before? Welcome Back!</h1>
              {this.errors()}
              <div className="login-form">
                <label>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    placeholder="Username"
                    />
                </label>
                <br/>
                <label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                    />
                </label>
                <br/>
                <input className="login-button" type="submit" value="Log in" />
              </div>
            </form>
            <br />
            <input type="button" className="demo-login" onClick={this.demoLogin} value="Demo Login"/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
