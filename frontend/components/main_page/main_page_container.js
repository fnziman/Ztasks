import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session_actions';
import { createForm,
         createList,
         editForm,
         editList,
         deleteList,
         listsDropDown,
         settingsDropdown,
         clearUi } from '../../actions/list_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
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
    deleteList: listId => dispatch(deleteList(listId)),
    listsDropDown: () => dispatch(listsDropDown()),
    settingsDropdown: () => dispatch(settingsDropdown()),
    clearUi: () => dispatch(clearUi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
