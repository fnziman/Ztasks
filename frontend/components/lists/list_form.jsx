import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    const listCreate = document.getElementById('list-create');
    listCreate.style.display = 'none';
  }
  updateTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const list = this.state;
    this.setState({ title: '' });
    this.props.createList(list);
    this.close();
  }

  render() {
    return (
      <div id="list-create">
        <span onClick={this.close} className="form-background"></span>

        <div className="list-form">
          <span onClick={this.close} className="close-button">&times;</span>
          <h1>Add a list</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Please enter a new list name:
              <br/>
              <input className="input-text" type="text" onChange={this.updateTitle} value={this.state.title} />
            </label>
            <br/>
            <div className="buttons">
              <input className="add-button" type="submit" defaultValue="Add" />
              <input className="cancel-button" type="button" onClick={this.close}  defaultValue="Cancel" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ListForm;
