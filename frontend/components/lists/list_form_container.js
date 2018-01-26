import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList: list => dispatch(createList(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
