import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };

    this.updateSearch = this.updateSearch.bind(this);
    this.search = this.search.bind(this);
  }
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const style = window.getComputedStyle(sidebar, null);
    const display = style.display === 'none' ? 'flex' : 'none';
    sidebar.style.display = display;
  }
  toggleSettings() {
    const settings = document.getElementById('settings');
    settings.style.display = 'flex';
  }
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }
  search(e) {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.search}`);
  }

  render() {
    return (
      <div className="header">
        <div className="left-header-container">
          <i onClick={this.toggleSidebar} className="menu">menu</i>
        </div>
        <div className="middle-header-container">
          <div className="searchbar-container">
            <i className="search">search</i>
            <form onSubmit={this.search} className="searchbar">
              <input onChange={this.updateSearch} value={this.state.search}/>
            </form>
          </div>
        </div>
        <div className="right-header-container">
          <div onClick={this.toggleSettings} className="settings-button">
            <i>settings</i>
            <i className="arrow">arrow_drop_down</i>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
