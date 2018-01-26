import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default withRouter(connect(mapStateToProps, null)(Header));
