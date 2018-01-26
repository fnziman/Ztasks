import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTasks, createTask, editTask } from '../../actions/task_actions';
import SearchedTasks from './searched_tasks';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const searchTerm = ownProps.match.params.searchTerm.toLowerCase();
  const searchedTasks = allTasks.filter(task => {
    return(task.title.toLowerCase().includes(searchTerm));
  });
  const incomplete = Selector.incomplete(searchedTasks);
  const complete = Selector.complete(searchedTasks);

  return {
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
