import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {data:products,isLoading,refetch} = useQuery('products',()=> fetch('http://localhost:5000/parts').then(res=> res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-primary my-5">Manage Products</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Available</th>
                        <th></th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        products.map((product,index)=><ProductRow
                        key={product._id}
                        product={product}
                        index={index}
                        refetch={refetch}
                        ></ProductRow>)
                     }
                    </tbody>
                </table>
             </div>
        </div>
    );
};

export default ManageProduct;