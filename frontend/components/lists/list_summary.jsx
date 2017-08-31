import React from 'react';

class ListSummary extends React.Component {

  render() {

    let listName = this.props.location.pathname.split('/').slice(-1)[0];
    let totalTasks = [];
    let dueToday = [];
    let dueTomorrow = [];
    let completed = [];

    switch (listName) {
      case "all":
        if (this.props.allTasks.length > 0) {
          totalTasks = this.props.allTasks;
          dueToday = this.props.allTasks.filter(task => {
            return(task.due_date === this.props.today);
          });
          dueTomorrow = this.props.allTasks.filter(task => {
            return(task.due_date === this.props.tomorrow);
          });
          completed = this.props.allTasks.filter(task => {
            return(task.complete);
          });
        }
        break;
      case "today":
        if (this.props.todayTasks.length > 0) {
          totalTasks = this.props.todayTasks;
          dueToday = this.props.todayTasks;
          completed = this.props.todayTasks.filter(task => {
            return(task.complete);
          });
        }
        break;
      case "tomorrow":
        if (this.props.tomorrowTasks.length > 0) {
          totalTasks = this.props.tomorrowTasks;
          dueTomorrow = this.props.tomorrowTasks;
          completed = this.props.todayTasks.filter(task => {
            return(task.complete);
          });
        }
          break;
      case "this_week":
        if (this.props.thisWeekTasks.length > 0) {
          listName = "this week";
          totalTasks = this.props.thisWeekTasks;
          dueToday = this.props.todayTasks;
          dueTomorrow = this.props.tomorrowTasks;
          completed = this.props.thisWeekTasks.filter(task => {
            return(task.complete);
          });
        }
        break;
      default:
        if (this.props.currentList) {
          listName = this.props.currentList.title;
          totalTasks = this.props.currentList.tasks;
          dueToday = this.props.currentList.tasks.filter(task => {
            return(task.due_date === this.props.today);
          });
          dueTomorrow = this.props.currentList.tasks.filter(task => {
            return(task.due_date === this.props.tomorrow);
          });
          completed = this.props.currentList.tasks.filter(task => {
            return(task.completed);
          });
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
