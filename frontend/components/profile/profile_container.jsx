import { connect } from 'react-redux';
import { editUser }from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: user => dispatch(editUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
