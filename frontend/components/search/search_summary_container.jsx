import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchSummary from './search_summary';
import { fetchTasks, createTask, editTask} from '../../actions/task_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const searchTerm = ownProps.match.params.searchTerm;
  let searchedTasks = allTasks.filter(task => {
    return(task.title.toLowerCase().includes(searchTerm));
  });
  const incomplete = Selector.incomplete(searchedTasks);
  const complete = Selector.complete(searchedTasks);

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSummary));
