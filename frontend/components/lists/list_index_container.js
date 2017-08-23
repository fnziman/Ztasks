import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists } from '../../actions/list_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    lists: asArray(state),
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
