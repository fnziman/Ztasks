import React from 'react';
import ListIndexItem from './list_index_item';
import ListEditForm from './list_edit_form';
import ListForm from './list_form';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      editing: false,
      creating: false,
    };
  }
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    let form;
    if (this.state.editing) {
      form = <ListEditForm
         className="list-edit-form"
         list={this.props.list}
         edit={this.props.edit} />;
    } else if (this.state.creating) {
      form = <ListForm
        className="list-form"
        createList={this.props.createList}
        currentUser={this.props.currentUser} />;
    }
    const lists = this.props.lists.map(list => {
      return (
        <ListIndexItem className="lists-index-item"
          key={list.id}
          list={list}
          edit={this.props.editList}
          delete={this.props.deleteList} />
      );
    });

    return (
      <div className="lists-index">
        {form}
        <h1>Lists</h1>
        {lists}
      </div>
    );
  }
}

export default ListIndex;
