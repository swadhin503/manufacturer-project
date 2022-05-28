import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    
    const [orders,setOrders]= useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?email=${user?.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                signOut(auth)
                navigate('/')
            }
            return res.json()
        })
        .then(data=>setOrders(data))
        }
    },[user])

    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-primary my-5">My Orders{orders.name}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full mt-6">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        orders.map((order,index)=>
                        <tr>
                        <th>{index+1}</th>
                        <td>{order.product_name}</td>
                        <td>{order.orderQuantity}</td>
                        <td>$ {order.total}</td>
                        <td>{order.paid?
                         <span className="text-xl text-primary">Paid</span>
                         :
                         <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-primary text-white ">Pay</button></Link>
                        }</td>
                    </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;