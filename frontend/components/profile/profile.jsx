import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
    };

    this.close = this.close.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.props.clearUi();
  }
  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.close();
    this.props.editProfile(user);
  }

  render() {
    return (
      <continer className="flex-container">
        <span onClick={this.close} className="form-background"></span>

        <div className="profile-form">
          <span onClick={this.close} className="close-button">&times;</span>
          <h1>Account</h1>
          <form onSubmit={this.handleSubmit} >
            <label> Username
              <input type="text" onChange={this.update('username')} value={this.state.username} />
            </label>
            <label> Email
              <input type="text" onChange={this.update('email')} value={this.state.email} />
            </label>
            <label> First Name
              <input type="text" onChange={this.update('first_name')} value={this.state.first_name} />
            </label>
            <label> Last Name
              <input type="text" onChange={this.update('last_name')} value={this.state.last_name} />
            </label>
            <input type="submit" className="save-change-button" defaultValue="Save changes" />
          </form>
        </div>
      </continer>
    );
  }
}

export default Profile;
