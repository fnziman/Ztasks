import React from 'react';
import ListIndexContainer from '../lists/list_index_container';

const Sidebar = () => {
  return (
    <container id="sidebar" className="sidebar-container">
      <container className="logo">
        <p>Ztasks</p>
      </container>
      <ListIndexContainer/>
    </container>
  );
};

export default Sidebar;
