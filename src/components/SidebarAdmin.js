import React from 'react';
import SidebarBar from './SidebarBar';
import { NavLink } from 'react-router-dom'

const SideBarAdmin = () => {
  return (
    <div>
      <NavLink className="a_title" to="/">Admin</NavLink>
      <div className="mt-4">
        <SidebarBar title="Dashboard"/>
      </div>
    </div>
  )
}

export default SideBarAdmin;
