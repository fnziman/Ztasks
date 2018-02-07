import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksIndex from './tasks_index';
import { fetchTasks, createTask, editTask } from '../../actions/task_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const allTasks = Selector.TasksAsArray(state);
  const thisWeekTasks = Selector.thisWeekTasks(allTasks);
  const complete = Selector.complete(thisWeekTasks);
  const incomplete = Selector.incomplete(thisWeekTasks);
  return {
    complete: complete,
    incomplete: incomplete,
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
