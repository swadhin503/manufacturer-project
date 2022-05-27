import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role} = user;
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT'
        })
        .then(res=> {
            if(res.status=== 403){
                toast.error('Failed to make an admin');
            }
           return res.json()
        })
        .then(data=> {
            console.log(data)
            if(data.modifiedCount > 0){
                refetch()
                toast.success('Admin has been created successfully')
            }

        })
    }
    const removeUser = ()=>{
        
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs btn-accent text-white">Make Admin</button>}</td>
            <td><button onclick={removeUser} class="btn btn-xs btn-error text-white">Remove User</button></td>
        </tr>
    );
};

export default UserRow;