import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const logout = () => {
        signOut(auth);
      };
    const [user,loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    const navList = <>
                      <li><Link to='/'>HOME</Link></li>
                      <li><Link  to='/parts'>PRODUCTS</Link></li>
                      <li><Link  to='/reviews'>REVIEWS</Link></li>
                      {
                          user ?
                          <>
                          <li><Link  to='/myOrders'>MY ORDERS</Link></li>
                          <li><Link  to='/addReview'>ADD A REVIEW</Link></li>
                          <li><Link  to='/myProfile'>MY PROFILE</Link></li>
                          <li><button onClick={logout}  to='/login'>SIGN OUT</button></li>
                          </>
                          :
                          <li><Link  to='/login'>LOGIN</Link></li>
                      }
                      
                     
                    </>
    return (
        <div className="navbar bg-accent text-white">
            <div className="navbar-start">
               <div className="dropdown">
               <label tabindex="0" className="btn btn-ghost lg:hidden">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-accent">
                        {navList}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-bold">SS Productions</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    {navList}
                    </ul>
                </div>
            
         </div>
    );
};

export default Navbar;