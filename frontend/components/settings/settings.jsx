import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.openProfileForm = this.openProfileForm.bind(this);
  }

  openProfileForm() {
    const profileForm = document.getElementById('profile');
    profileForm.style.display = 'flex';
    this.close();
  }
  close() {
    const settings = document.getElementById('settings');
    settings.style.display = 'none';
  }
  handleLogout() {
    this.props.logout(this.props.currentUser);
  }

  render() {
    return (
      <div id="settings">
        <span onClick={this.close} className="form-background"></span>

          <div className="settings-dropdown">
            <div onClick={this.openProfileForm} className="user">
              <div className="user-info">
                <p className="name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                <p className="email">{this.props.currentUser.email}</p>
              </div>
            </div>
            <p className="signout" onClick={this.handleLogout} >Sign out</p>
          </div>
      </div>
    );
  }
}
export default Settings;
