import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role} = user;
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT'
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            refetch()
            toast.success('Admin has been created successfully')
        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs btn-accent text-white">Make Admin</button>}</td>
            <td><button class="btn btn-xs btn-error text-white">Remove User</button></td>
        </tr>
    );
};

export default UserRow;