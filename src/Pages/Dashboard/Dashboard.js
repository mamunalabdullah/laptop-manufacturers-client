import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-3'><Link to="/dashboard">My Orders</Link></li>
                    <li className='mb-3'><Link to="/dashboard/review">My Reviews</Link></li>
                    <li className='mb-3'><Link to="/dashboard/users">All Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;