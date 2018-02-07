import { connect } from 'react-redux';
import ListSummary from './list_summary';
import { withRouter } from 'react-router-dom';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const completeTasks = Selector.complete(allTasks);
  const incompleteTasks = Selector.incomplete(allTasks);
  return {
    currentList: state.lists[ownProps.match.params.listId],
    allTasksIncomplete: incompleteTasks,
    allTasksComplete: completeTasks,
    todayTasksIncomplete: Selector.todayTasks(incompleteTasks),
    todayTasksComplete: Selector.todayTasks(completeTasks),
    tomorrowTasksIncomplete: Selector.tomorrowTasks(incompleteTasks),
    tomorrowTasksComplete: Selector.tomorrowTasks(completeTasks),
    thisWeekTasksIncomplete: Selector.thisWeekTasks(incompleteTasks),
    thisWeekTasksComplete: Selector.thisWeekTasks(completeTasks),
  };
};

export default withRouter(connect(mapStateToProps, null)(ListSummary));
