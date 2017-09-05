import React from 'react';
import * as Selector from '../../reducers/selectors';

class ListSummary extends React.Component {

  render() {

    let listName = this.props.location.pathname.split('/').slice(-1)[0];
    let totalTasks = [];
    let dueToday = [];
    let dueTomorrow = [];
    let completed = [];

    switch (listName) {
      case "all":
        listName = "all tasks";
        totalTasks = this.props.allTasksIncomplete;
        dueToday = this.props.todayTasksIncomplete;
        dueTomorrow = this.props.tomorrowTasksIncomplete;
        completed = this.props.allTasksComplete;
        break;
      case "today":
        totalTasks = this.props.todayTasksIncomplete;
        dueToday = this.props.todayTasksIncomplete;
        completed = this.props.todayTasksComplete;
        break;
      case "tomorrow":
        totalTasks = this.props.tomorrowTasksIncomplete;
        dueTomorrow = this.props.tomorrowTasksIncomplete;
        completed = this.props.todayTasksComplete;
        break;
      case "this_week":
        listName = "This Week";
        totalTasks = this.props.thisWeekTasksIncomplete;
        dueToday = this.props.todayTasksIncomplete;
        dueTomorrow = this.props.tomorrowTasksIncomplete;
        completed = this.props.thisWeekTasksComplete;
        break;
      default:
        if (this.props.currentList) {
          const listId = this.props.currentList.id;
          listName = this.props.currentList.title;
          totalTasks = Selector.listTasks(this.props.allTasksIncomplete, listId);
          dueToday = Selector.listTasks(this.props.todayTasksIncomplete, listId);
          dueTomorrow = Selector.listTasks(this.props.tomorrowTasksIncomplete, listId);
          completed = Selector.listTasks(this.props.allTasksComplete, listId);
        }
    }
    return (
      <container className="list-summary">
        <h1>{listName}</h1>
        <container className="summary-items">
          <div className="summary-item total">
            {totalTasks.length}
            <p>tasks</p>
          </div>
          <div className="summary-item today">
            {dueToday.length}
            <p>due today</p>
          </div>
          <div className="summary-item tomorrow">
            {dueTomorrow.length}
            <p>due tomorrow</p>
          </div>
          <div className="summary-item completed">
            {completed.length}
            <p>completed</p>
          </div>
        </container>
      </container>
    );
  }
}

export default ListSummary;
