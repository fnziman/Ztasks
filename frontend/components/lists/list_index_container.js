import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListIndex from './list_index';
import {
  fetchLists,
  createList,
  editList,
  setCurrentList,
  // clearCurrentList,
  deleteList
} from '../../actions/list_actions';
import {
  createForm,
  editForm,
  listsDropDown,
  clearUi,
} from '../../actions/ui_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const allIncompleteTasks = Selector.incomplete(allTasks);
  return {
    currentList: state.currentList,
    ui: state.ui,
    tasks: allIncompleteTasks,
    lists: Selector.ListsAsArray(state),
    currentUser: state.session.currentUser,
    allTasks: allIncompleteTasks,
    todayTasks: Selector.todayTasks(allIncompleteTasks),
    tomorrowTasks: Selector.tomorrowTasks(allIncompleteTasks),
    thisWeekTasks: Selector.thisWeekTasks(allIncompleteTasks),
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    createForm: () => dispatch(createForm()),
    createList: list => dispatch(createList(list)),
    setCurrentList: list => dispatch(setCurrentList(list)),
    editForm: () => dispatch(editForm()),
    editList: listId => dispatch(editList(listId)),
    listsDropDown: () => dispatch(listsDropDown()),
    clearUi: () => dispatch(clearUi()),
    // clearCurrentList: () => dispatch(clearCurrentList()),
    deleteList: listId => dispatch(deleteList(listId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));
