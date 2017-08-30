import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskDetail from './task_detail';
import { ListsAsArray } from '../../../reducers/selectors';
import {
  setCurrentTask,
  editTask,
  deleteTask
} from '../../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTask: state.tasks[ownProps.match.params.taskId],
    taskId: ownProps.match.params.taskId,
    lists: ListsAsArray(state),
    listId: ownProps.match.params.listId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentTask: (taskId) => dispatch(setCurrentTask(taskId)),
    editTask: (task) => dispatch(editTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
  };
};


export default(connect(mapStateToProps, mapDispatchToProps)(TaskDetail));
