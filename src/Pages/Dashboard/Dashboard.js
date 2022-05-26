import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  mt-3">
                {/* <h2 className="text-center text-5xl text-primary font-bold">Welcome To Dashboard</h2> */}
                <Outlet></Outlet>
            
            </div> 
            <div class="drawer-side">
                <label for="sidebar" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          
                    <li><Link class="btn btn-ghost  text-primary mt-3" to="/dashboard">My Orders</Link></li>
                    <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/myProfile">My Profile</Link></li>
                    <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/addReview">Add a Review</Link></li>
                </ul>
            
            </div>
      </div>
    );
};

export default Dashboard;