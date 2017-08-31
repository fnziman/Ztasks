import { connect } from 'react-redux';
import ListSummary from './list_summary';
import { withRouter } from 'react-router-dom';
import { TasksAsArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = TasksAsArray(state);
  const today = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) {
      month = '0' + (month + 1);
    }
    let date = currentDate.getDate();
    if (date < 10) {
      date = '0' + (date + 1);
    }
    return (year + "-" + month + "-" + date);
  };
  const tomorrow = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); //set to tomorrow
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) {
      month = '0' + (month + 1);
    }
    let date = currentDate.getDate();
    if (date < 10) {
      date = '0' + (date + 1);
    }
    return (year + "-" + month + "-" + date);
  };
  const thisWeek = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 6); //set to tomorrow
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) {
      month = '0' + (month + 1);
    }
    let date = currentDate.getDate();
    if (date < 10) {
      date = '0' + (date + 1);
    }
    return (year + "-" + month + "-" + date);
  };

  const todayTasks = (tasks, day) => {
    let result = [];

    result = tasks.filter(task => {
      return (task.due_date === day && !task.completed);
    });
    return result;
  };
  const tomorrowTasks = (tasks, day) => {
    let result = [];

    result = tasks.filter(task => {
      return (task.due_date === day && !task.completed);
    });
    return result;
  };
  const thisWeekTasks = (tasks, day) => {
    let result = [];

    result = tasks.filter(task => {
      return (task.due_date <= day && !task.completed);
    });
    return result;
  };

  return {
    currentList: state.lists[ownProps.match.params.listId],
    today: today(),
    tomorrow: tomorrow(),
    allTasks: allTasks,
    todayTasks: todayTasks(allTasks, today()),
    tomorrowTasks: tomorrowTasks(allTasks, tomorrow()),
    thisWeekTasks: thisWeekTasks(allTasks, thisWeek()),
  };
};

export default withRouter(connect(mapStateToProps, null)(ListSummary));
