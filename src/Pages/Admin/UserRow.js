import React from 'react';
import { toast} from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role} = user;
    console.log(user)
    const makeAdmin = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
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
                refetch();
                toast.success('Admin has been created successfully');
            }

        })
    }
    const removeUser = ()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            refetch()
            toast.success('Removed User successfully')

        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs btn-accent text-white">Make Admin</button>}</td>
            <td><button onClick={removeUser} for="my-modal-6"  class="btn btn-xs btn-error text-white">Remove User</button></td>

            
            {/* <label for="my-modal-6" class="btn modal-button">open modal</label> */}
            {/* <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-primary text-lg">Are you sure you want to delete?</h3>
                <div class="modal-action">
                <label for="my-modal-6" class="btn btn-accent text-white">Cancel</label>
                <button onClick={removeUser}  className="btn btn-error text-white">Delete</button>
                </div>
            </div>
            </div> */}
        </tr>
    );
};

export default UserRow;