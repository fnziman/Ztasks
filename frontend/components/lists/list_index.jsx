import React from 'react';
import ListIndexItem from './list_index_item';
import { withRouter, Link } from 'react-router-dom';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchLists();
  }
  toggleLists() {
    const lists = document.getElementById('lists');
    const style = window.getComputedStyle(lists, null);
    const display = style.display === 'none' ? 'block' : 'none';
    lists.style.display = display;
  }
  toggleInbox() {
    const inbox = document.getElementById('inbox');
    const style = window.getComputedStyle(inbox, null);
    const display = style.display === 'none' ? 'block' : 'none';
    inbox.style.display = display;
  }
  createListForm() {
    const create = document.getElementById('list-create');
    create.style.display = 'flex';
  }

  render() {
    const lists = this.props.lists.map(list => {
      return (
        <ListIndexItem
          key={list.id}
          list={list}
          numTasks={
            this.props.allIncompleteTasks.filter(task => task.list_id === list.id).length
          }
          deleteList={this.props.deleteList}
        />
      );
    });

    return (
      <div className="list-index-container" >
        <div className="lists-index">
          <div onClick={this.toggleInbox} className="list-header">
            <i className="arrow">arrow_drop_down</i>
            <h1>Inbox</h1>
          </div>
          <div id="inbox">
            <Link className="list-index-item" to="/app/all">All Tasks
              <span className="num-tasks">{this.props.numTasks}</span>
            </Link>
            <Link className="list-index-item" to="/app/today">Today
              <span className="num-tasks">{this.props.numTodayTasks}</span>
            </Link>
            <Link className="list-index-item" to="/app/tomorrow">Tomorrow
              <span className="num-tasks">{this.props.numTomorrowTasks}</span>
            </Link>
            <Link className="list-index-item list-title" to="/app/this_week">This Week
              <span className="num-tasks">{this.props.numThisWeekTasks}</span>
            </Link>
          </div>
        </div>
        <div className="lists-index">
          <div className="list-header">
            <div className="clickable" onClick={this.toggleLists} >
              <i className="arrow">arrow_drop_down</i>
              <h1>Lists</h1>
            </div>
            <i onClick={this.createListForm} className="add-list">add</i>
          </div>
          <div id="lists" >
            {lists}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ListIndex);
