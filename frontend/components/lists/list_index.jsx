import React from 'react';
import ListIndexItem from './list_index_item';
import { Link } from 'react-router-dom';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLists: true, showInbox: true };
    this.toggleLists = this.toggleLists.bind(this);
    this.toggleInbox = this.toggleInbox.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }
  toggleLists() {
    if (this.state.showLists) {
      this.setState({ showLists: false });
    } else {
      this.setState({ showLists: true });
    }
  }
  toggleInbox() {
    if (this.state.showInbox) {
      this.setState({ showInbox: false });
    } else {
      this.setState({ showInbox: true });
    }
  }

  render() {
    const lists = this.props.lists.map(list => {
      return (
        <ListIndexItem
          key={list.id}
          list={list}
          ui={this.props.ui}
          currentList={this.props.currentList}
          setCurrentList={this.props.setCurrentList}
          editForm={this.props.editForm}
          editList={this.props.editList}
          listsDropDown={this.props.listsDropDown}
          clearUi={this.props.clearUi}
          clearCurrentList={this.props.clearCurrentList}
          deleteList={this.props.deleteList} />
      );
    });
    return (
      <container className="list-index-container" >
        <div className="lists-index">
          <div onClick={this.toggleInbox} className="list-header">
            <i className="arrow">arrow_drop_down</i>
            <h1>Inbox</h1>
          </div>
          <container className={this.state.showInbox ? "view" : "hidden"}>
            <Link className="list-index-item" to="/app/all">All Tasks
              <span className="num-tasks">{this.props.allTasks.length}</span>
            </Link>
            <Link className="list-index-item" to="/app/today">Today
              <span className="num-tasks">{this.props.todayTasks.length}</span>
            </Link>
            <Link className="list-index-item" to="/app/tomorrow">Tomorrow
              <span className="num-tasks">{this.props.tomorrowTasks.length}</span>
            </Link>
            <Link className="list-index-item list-title" to="/app/this_week">This Week
              <span className="num-tasks">{this.props.thisWeekTasks.length}</span>
            </Link>
          </container>
        </div>
        <div className="lists-index">
          <div className="list-header">
            <div className="clickable" onClick={this.toggleLists} >
              <i className="arrow">arrow_drop_down</i>
              <h1>Lists</h1>
            </div>
            <i onClick={this.props.createForm} className="add-list">add</i>
          </div>
          <container className={this.state.showLists ? "view" : "hidden"}>
            {lists}
          </container>
        </div>
      </container>
    );
  }
}

export default ListIndex;
