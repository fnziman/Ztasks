import React from 'react';
import { withRouter } from 'react-router-dom';

class ListEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      id: this.props.currentList.id,
      title: this.props.currentList.title,
      user_id: this.props.currentList.user_id
    };

    this.close = this.close.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  close() {
    this.props.clearUi();
    // this.props.clearCurrentList();
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state;
    this.props.editList( list );
    this.props.clearUi();
    this.props.clearCurrentList();
  }

  render() {
    return (
      <container className="flex-container">
        <span onClick={this.close} className="form-background"></span>

        <div className="list-edit-form">
          <span onClick={this.close} className="close-button">&times;</span>
          <h1>Rename list</h1>
          <form onSubmit={this.handleSubmit} >
            <label>List name:
              <br/>
              <input type="text" onChange={this.updateTitle} value={this.state.title} />
            </label>
            <br/>
            <input className="save-button" type="submit" defaultValue="Save" />
            <input onClick={this.close} type="button" className="cancel-button" defaultValue="Cancel" />
          </form>
        </div>
      </container>
    );
  }
}

export default withRouter(ListEditForm);
