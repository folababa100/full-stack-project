import React from 'react';
import SidebarBar from './SidebarBar';
import { NavLink } from 'react-router-dom'

const SideBarAdmin = () => {
  return (
    <div className="sidebar">
      <NavLink className="a_title" to="/">Admin</NavLink>
      <div className="mt-7">
        <SidebarBar title="Dashboard"/>
      </div>
      <SidebarBar title="Products" />
      <SidebarBar title="Configuration"/>
      <SidebarBar title="Settings" />
    </div>
  )
}

export default SideBarAdmin;
