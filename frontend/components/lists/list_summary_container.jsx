import { connect } from 'react-redux';
import ListSummary from './list_summary';
import { withRouter } from 'react-router-dom';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  let currentList, currentListIncomplete, currentListToday,
    currentListTomorrow, currentListComplete;

  if (Object.keys(state.lists).length > 0) {
    currentList = state.lists[ownProps.match.params.listId];
    currentListIncomplete = currentList.tasks.filter(task => !task.completed);
    currentListToday = Selector.todayTasks(currentList.tasks);
    currentListTomorrow = Selector.tomorrowTasks(currentList.tasks);
    currentListComplete = currentList.tasks.filter(task => task.completed);
  }
  return {
    currentList: currentList,
    currentListIncomplete: currentListIncomplete,
    currentListToday: currentListToday,
    currentListTomorrow: currentListTomorrow,
    currentListComplete: currentListComplete,
    allTasksIncomplete: allTasks.filter(task => !task.completed),
    allTasksComplete: allTasks.filter(task => task.completed),
    todayTasksIncomplete: Selector.todayTasks(allTasks).filter(task => !task.completed),
    todayTasksComplete: Selector.todayTasks(allTasks).filter(task => task.completed),
    tomorrowTasksIncomplete: Selector.tomorrowTasks(allTasks).filter(task => !task.completed),
    tomorrowTasksComplete: Selector.tomorrowTasks(allTasks).filter(task => task.completed),
    thisWeekTasksIncomplete: Selector.thisWeekTasks(allTasks).filter(task => !task.completed),
    thisWeekTasksComplete: Selector.thisWeekTasks(allTasks).filter(task => task.completed),
  };
};

export default withRouter(connect(mapStateToProps, null)(ListSummary));
