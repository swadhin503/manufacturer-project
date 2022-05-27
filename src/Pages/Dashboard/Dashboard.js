import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

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
          
                    {!admin && 
                    <>
                    <li><Link class="btn btn-ghost  text-primary mt-3" to="/dashboard/orders">My Orders</Link></li>

                    <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/addReview">Add a Review</Link></li>
                    </>}


                    <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard">My Profile</Link></li>

                    
                    {admin &&
                    <>
                     <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/users">All Users</Link></li>

                     <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/manageOrders">Manage Orders</Link></li>

                     <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/addProduct">Add product</Link></li>

                     <li><Link class="btn btn-ghost text-primary mt-3" to="/dashboard/manageProduct">Manage products</Link></li>

                     </>
                     }
                    
                </ul>
            
            </div>
      </div>
    );
};

export default Dashboard;