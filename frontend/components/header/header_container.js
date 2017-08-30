import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { settingsDropdown, clearUi } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    ui: state.ui,
    currentUser: state.session.currentUser,
    currentList: state.currentList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    settingsDropdown: () => dispatch(settingsDropdown()),
    clearUi: () => dispatch(clearUi()),
    logout: user => dispatch(logout(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
