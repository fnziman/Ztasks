import React from 'react';
// This will be a modul
class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
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
    this.setState({ title: '' });
    this.props.clearUi();
    this.props.createList({ list: list });
  }

  render() {
    return (
      <container className="flex-container">
        <div className="list-form">
          <span onClick={this.close} className="close-button">&times;</span>
          <h1>Add a list</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Please enter a new list name:
              <br/>
              <input className="input-text" type="text" onChange={this.updateTitle} value={this.state.title} />
            </label>
            <br/>
            <container className="buttons">
              <input className="add-button" type="submit" defaultValue="Add" />
              <input className="cancel-button" type="button" onClick={this.close}  defaultValue="Cancel" />
            </container>
          </form>
        </div>
      </container>
    );
  }
}

export default ListForm;
