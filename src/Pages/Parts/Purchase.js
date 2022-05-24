import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const {id} = useParams();
    const { isLoading, data,refetch } = useQuery('repoData', () =>
     fetch(`http://localhost:5000/parts/${id}`).then(res =>
       res.json()
     )
   )

//    const {name,picture,price,description,minOrder,available} = data;
    const {user} = useAuthState(auth);
    console.log(user);
   if(isLoading){
       <Loading></Loading>
   }
    return (
        <div className="flex items-center justify-center my-10">
          <div className="grid gird-cols-1 lg:grid-cols-1 w-80 gap-5">
               <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img className="max-w-xs" src={data?.picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-accent">{data?.name}</h2>
                <p>Price: ${data?.price}</p>
                <p>Minimum Order: {data?.minOrder}</p>
                <p>Available: {data?.available}</p>
                <p>Description: {data?.description}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-accent text-white">Purchase Now</button>
                </div>
             </div>
          </div>
        </div>
     </div>
    );
};

export default Purchase;