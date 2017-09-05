import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainPage from './main_page';
import { logout, editUser } from '../../actions/session_actions';
import {
  createList,
  editList,
  deleteList,
        } from '../../actions/list_actions';
import {
  createForm,
  editForm,
  //  clearCurrentList,
  listsDropDown,
  settingsDropdown,
  clearUi,
  profileForm
} from '../../actions/ui_actions';
import { ListsAsArray } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    lists: ListsAsArray(state),
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
    createForm: () => dispatch(createForm()),
    createList: (list) => dispatch(createList(list)),
    editForm: () => dispatch(editForm()),
    editList: listId => dispatch(editList(listId)),
    // clearCurrentList: () => dispatch(clearCurrentList()),
    deleteList: listId => dispatch(deleteList(listId)),
    listsDropDown: () => dispatch(listsDropDown()),
    settingsDropdown: () => dispatch(settingsDropdown()),
    clearUi: () => dispatch(clearUi()),
    profileForm: () => dispatch(profileForm()),
    editProfile: (user) => dispatch(editUser(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
