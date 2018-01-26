import { connect } from 'react-redux';
import Settings from './settings';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
