import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile min-h-max">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>ADD Reviews</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {/* <li>{admin && <Link to='/dashboard/users'>All User's</Link>}</li> */}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;