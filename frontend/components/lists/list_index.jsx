import React from 'react';
import ListIndexItem from './list_index_item';
import ListForm from './list_form';

class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
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
        <h1>Lists</h1>
        {lists}
        <ListForm className="list-form"
          createList={this.props.createList}
          currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default ListIndex;
