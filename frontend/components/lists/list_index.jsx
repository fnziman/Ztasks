import React from 'react';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {

  componentDidMount() {
    this.props.fetchLists();
  }

  render() {

    const lists = this.props.lists.map(list => {
      return (
        <ListIndexItem
          key={list.id}
          list={list}
          ui={this.props.ui}
          setCurrentList={this.props.setCurrentList}
          editForm={this.props.editForm}
          editList={this.props.editList}
          listsDropDown={this.props.listsDropDown}
          clearUi={this.props.clearUi}
          deleteList={this.props.deleteList} />
      );
    });

    return (
      <container className="list-index-container" >
        <div className="lists-index">
          <div className="list-header">
            <i className="arrow">arrow_drop_down</i>
            <h1>Lists</h1>
            <i onClick={this.props.createForm} className="add-list">add</i>
          </div>
          {lists}
        </div>
      </container>
    );
  }
}

export default ListIndex;
