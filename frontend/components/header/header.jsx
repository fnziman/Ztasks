import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
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
        <container className="right-header-container">
          <div className="searchbar-container">
            <i className="search">search</i>
            <form className="searchbar">
              <input >

              </input>
            </form>
            <i className="arrow">arrow_drop_down</i>
          </div>
          <div className="settings">
            <i onClick={this.handleLogout}>settings</i>
            <i className="arrow">arrow_drop_down</i>
          </div>
        </container>
      </container>
    );
  }

}

export default Header;
