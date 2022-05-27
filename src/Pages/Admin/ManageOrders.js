import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    const {data:orders,isLoading,refetch} = useQuery('users',()=> fetch('http://localhost:5000/order').then(res=> res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(orders)
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-primary my-5">Manage All Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        orders.map((order,index)=>
                        <tr>
                            <th>{index+1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.product_name}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.total}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default ManageOrders;