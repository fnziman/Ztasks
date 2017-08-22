import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');  //where do i want this to be going?
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({ user });
  }

  errors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Sign up for free.
          <br/>
          {this.errors()}
          <div className="signup-form">
            <label>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
                placeholder="First Name"
                />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
                placeholder="Last Name"
                />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email"
                />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                placeholder="Username"
                />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"
                />
            </label>
            <br/>
            <input type="submit" value="Sign Up!" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
