import React from 'react';
//this will be a modul
class ListEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      id: this.props.list.id,
      title: this.props.list.title,
      user_id: this.props.list.user_id
    };

    this.close = this.close.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  close() {
    this.props.clearUi();
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state;
    this.props.clearUi();
    this.props.editList({ list: list });
  }

  render() {
    return (
      <container className="flex-container">
        <div className="list-edit-form">
          <span onClick={this.close} className="close-button">&times;</span>
          <h1>Rename list</h1>
          <label>List name:
            <br/>
            <input type="text" onChange={this.updateTitle} value={this.state.title} />
          </label>
          <br/>
          <input onClick={this.handleSubmit} className="save-button" type="button" defaultValue="Save" />
          <input onClick={this.close} className="cancel-button" type="button" defaultValue="Cancel" />
        </div>
      </container>
    );
  }
}

export default ListEditForm;
