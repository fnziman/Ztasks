import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListIndex from './list_index';
import { fetchLists, editList, deleteList } from '../../actions/list_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const allIncompleteTasks = Selector.incomplete(allTasks);
  return {
    allIncompleteTasks,
    numTasks: allIncompleteTasks.length,
    lists: Selector.ListsAsArray(state),
    numTodayTasks: Selector.todayTasks(allIncompleteTasks).length,
    numTomorrowTasks: Selector.tomorrowTasks(allIncompleteTasks).length,
    numThisWeekTasks: Selector.thisWeekTasks(allIncompleteTasks).length,
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    deleteList: listId => dispatch(deleteList(listId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));
