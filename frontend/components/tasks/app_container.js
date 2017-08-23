import { connect } from 'react-redux';
import TasksPage from './tasks_page';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
