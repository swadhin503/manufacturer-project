import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data,isLoading,refetch} = useQuery('users',()=> fetch('http://localhost:5000/user').then(res=> res.json()));
    if (isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-center text-5xl">All Users{data.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((user,index)=>
                        <UserRow
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        ></UserRow>
                 )
                    }
                    </tbody>
                </table>
            </div>  
        </div>
    );
};

export default Users;