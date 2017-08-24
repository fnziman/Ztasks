import React from 'react';

class ListEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      id: this.props.list.id,
      title: this.props.list.title,
      user_id: this.props.list.user_id
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state;
    this.props.edit({ list: list });
  }

  render() {
    return (
      <div className="list-edit-form">
        <h1>Rename list</h1>
        <form onSubmit={this.handleSubmit} >
          <label>List name:
            <br/>
            <input type="text" onChange={this.updateTitle} value={this.state.title} />
          </label>
          <br/>
          <input type="submit" value="Save" />
          <input className="cancel-button" defaultValue="Cancel" />
        </form>
      </div>
    );
  }
}

export default ListEditForm;
