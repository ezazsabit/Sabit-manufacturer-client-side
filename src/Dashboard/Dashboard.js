import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    {/* <p className='mt-5 text-3xl font-bold text-secondary'>Dashboard!!</p> */}
                    <Outlet></Outlet>
                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    {/* we will use it in another section */}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/order'>My Order</Link></li>
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                        <li><Link to='/dashboard/review'>Add a Review</Link></li>
                   
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;