import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({children}) => {
    return (
        <div className="drawer drawer-mobile bg-base-200">
      <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/add-admin">Add Admin</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-tool">Add Tool</NavLink>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default DashboardSidebar;