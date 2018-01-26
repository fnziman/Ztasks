import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListIndex from './list_index';
import { fetchLists, editList, deleteList } from '../../actions/list_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const allIncompleteTasks = Selector.incomplete(allTasks);

  return {
    tasks: allIncompleteTasks,
    lists: Selector.ListsAsArray(state),
    todayTasks: Selector.todayTasks(allIncompleteTasks),
    tomorrowTasks: Selector.tomorrowTasks(allIncompleteTasks),
    thisWeekTasks: Selector.thisWeekTasks(allIncompleteTasks),
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    editList: listId => dispatch(editList(listId)),
    deleteList: listId => dispatch(deleteList(listId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));
