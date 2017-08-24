import React from 'react';
import ListEditForm from './list_edit_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.delete(this.props.list.id);
  }

  render() {
    return (
      <container>
        <div className="list-title">{this.props.list.title}</div>
        <ListEditForm className="list-edit-form"
          list={this.props.list}
          edit={this.props.edit} />
        <input type="button" onClick={this.handleDelete} value="Delete" />
      </container>
    );
  }
}

export default ListIndexItem;
