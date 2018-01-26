import { connect } from 'react-redux';
import { editList } from '../../actions/list_actions';
import { withRouter } from 'react-router-dom';
import ListEditForm from './list_edit_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentList: state.lists[ownProps.match.params.listId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editList: list => dispatch(editList(list)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListEditForm));
