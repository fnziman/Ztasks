import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { settingsDropdown, clearUi } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    ui: state.ui,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    settingsDropdown: () => dispatch(settingsDropdown()),
    clearUi: () => dispatch(clearUi()),
    logout: user => dispatch(logout(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
