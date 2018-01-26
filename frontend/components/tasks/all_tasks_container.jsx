import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksIndex from './tasks_index';
import { fetchTasks, createTask, editTask} from '../../actions/task_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const complete = Selector.complete(allTasks);
  const incomplete = Selector.incomplete(allTasks);
  return {
    // currentTask: state.tasks[ownProps.match.params.taskId],
    // listId: null,
    // dueDate: null,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksIndex));
