import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({product,index,refetch}) => {
    const deleteProduct = () => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/parts/${product._id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            refetch()
            toast.success('Removed Product successfully')

        })
        }
    }
    return (
        <tr>
                <th>{index+1}</th>
                <td>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={product.picture} alt='' />
                        </div>
                    </div>
                </td>
                <td>{product.name}</td>
                <td>$ {product.price}</td>
                <td>{product.available}</td>
                <td><button onClick={deleteProduct} class="btn btn-error text-white">Remove Item</button></td>
                
        </tr>
        )
  
};

export default ProductRow;