import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };

    this.showSettings = this.showSettings.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.search = this.search.bind(this);
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
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  search() {
    const currentList = this.props.location.pathname.split('/').slice(-1)[0];
    this.props.history.push(`/search/${currentList}/${this.state.search}`);
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
            <form onSubmit={this.search} className="searchbar">
              <input onChange={this.updateSearch} value={this.state.search}/>
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
