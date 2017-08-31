import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchedTasks from './searched_tasks';
import { fetchTasks, createTask, editTask} from '../../actions/task_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  let list = ownProps.match.params.listId;
  const searchTerm = ownProps.match.params.searchTerm;
  let searchedTasks = allTasks.filter(task => {
    return(task.title.includes(searchTerm));
  });
  let filtered = [];
  switch (list) {
    case "all":
      filtered = searchedTasks;
    break;
    case "today":
      filtered = Selector.todayTasks(searchedTasks);
      break;
    case "tomorrow":
      filtered = Selector.tomorrowTasks(searchedTasks);
        break;
    case "this_week":
      filtered = Selector.thisWeekTasks(searchedTasks);
      break;
    default:
      list = Number(list);
      if (Object.keys(state.lists).length > 0) {
        filtered = state.lists[list].tasks.filter(task => task.title.includes(searchTerm));
      }
  }
  let incomplete = [];
  let complete = [];
  filtered.forEach (task => {
    if (task.completed) {
      complete.push(task);
    } else {
      incomplete.push(task);
    }
  });
  return {
    ui: state.ui,
    incomplete: incomplete,
    complete: complete,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: task => dispatch(createTask(task)),
    editTask: task => dispatch(editTask(task)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchedTasks));
