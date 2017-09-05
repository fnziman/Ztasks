import { connect } from 'react-redux';
import ListSummary from './list_summary';
import { withRouter } from 'react-router-dom';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  return {
    currentList: state.lists[ownProps.match.params.listId],
    allTasksIncomplete: Selector.incomplete(allTasks),
    allTasksComplete: Selector.complete(allTasks),
    todayTasksIncomplete: Selector.todayTasks(allTasks).filter(task => !task.completed),
    todayTasksComplete: Selector.todayTasks(allTasks).filter(task => task.completed),
    tomorrowTasksIncomplete: Selector.tomorrowTasks(allTasks).filter(task => !task.completed),
    tomorrowTasksComplete: Selector.tomorrowTasks(allTasks).filter(task => task.completed),
    thisWeekTasksIncomplete: Selector.thisWeekTasks(allTasks).filter(task => !task.completed),
    thisWeekTasksComplete: Selector.thisWeekTasks(allTasks).filter(task => task.completed),
  };
};

export default withRouter(connect(mapStateToProps, null)(ListSummary));
