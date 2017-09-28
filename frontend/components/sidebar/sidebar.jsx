import React from 'react';
import ListIndexContainer from '../lists/list_index_container';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <container id="sidebar" className="sidebar-container">
      <Link to="/app/all" className="logo">
        <p>Ztasks</p>
      </Link>
      <ListIndexContainer/>
    </container>
  );
};

export default Sidebar;
