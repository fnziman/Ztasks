import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.showSettings = this.showSettings.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  showSettings() {
    if (this.props.ui === "settings") {
      this.props.clearUi();
    } else {
      this.props.settingsDropdown();
    }
  }
  handleLogout() {
    this.props.logout(this.props.currentUser);
  }

  render() {
    return (
      <container className="header">
        <container className="left-header-container">
          <i className="menu">menu</i>
        </container>
        <container className="middle-header-container">
          <div className="searchbar-container">
            <i className="search">search</i>
            <form className="searchbar">
              <input >

              </input>
            </form>
            <i className="arrow searchbar-arrow">arrow_drop_down</i>
          </div>
        </container>
        <container className="right-header-container">
          <i className="cloud">cloud_done</i>
          <i className="notifications">notifications_none</i>
          <div onClick={this.showSettings} className="settings">
            <i>settings</i>
            <i className="arrow">arrow_drop_down</i>
          </div>
        </container>
      </container>
    );
  }

}

export default Header;
