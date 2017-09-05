import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksIndex from './tasks_index';
import { fetchTasks, createTask, editTask } from '../../actions/task_actions';
import * as Selector from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = Selector.TasksAsArray(state);
  const today = Selector.today();
  const todayTasks = Selector.todayTasks(allTasks);
  const complete = Selector.complete(todayTasks);
  const incomplete = Selector.incomplete(todayTasks);
  return {
    // listId: null,
    dueDate: today,
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
