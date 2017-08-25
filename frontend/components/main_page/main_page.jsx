import React from 'react';
import HeaderContainer from '../header/header_container';
import Sidebar from '../sidebar/sidebar';
import ListForm from '../lists/list_form';
import ListEditForm from '../lists/list_edit_form';


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nextProps: {}};
    this.form = this.form.bind(this);
  }

  form() {
    switch (this.props.ui) {
      case "create":
        return <ListForm className="list-form"
          createList={this.props.createList}
          clearUi={this.props.clearUi}
          currentUser={this.props.currentUser} />;
      case "edit":
        return <ListEditForm className="list-edit-form"
          list={this.props.list}
          clearUi={this.props.clearUi}
          editList={this.props.editList} />;
      default:
        return null;
    }
  }

  render() {
    return(
      <div className="main-page">
        <HeaderContainer />
        <Sidebar />
        {this.form()}
      </div>
    );
  }
}

export default MainPage;
