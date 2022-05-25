import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
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

    const [user] = useAuthState(auth);
    // console.log(user);
    // console.log(user?.displayName);
   if(isLoading){
       <Loading></Loading>
   }

   const { register, formState: { errors }, handleSubmit } = useForm();

   const onSubmit = data => {
    console.log(data);
    }

    return (
      <div>
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

         {/* order infos */}
         <div className="flex justify-center items-center h-screen my-10">
           <div className="card w-96 bg-base-100 shadow-xl">
             <div className="card-body">
                <h2 className="text-center text-accent font-bold text-5xl">Purchase Form</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                     {/* Name */}

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Name</span>
                      </label>
                    <input type="text" placeholder="Enter Your Name" value={user?.displayName} className="input input-bordered w-full max-w-xs" {...register("name")}/>
                      <label className="label">
                      {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}   
                      </label>
                    </div>
                            {/* Email */}

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Email</span>
                      </label>
                    <input type="email" placeholder="Enter Your Email" value={user?.email} className="input input-bordered w-full max-w-xs" {...register("email")}/>
                      <label className="label">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}   
                      </label>
                    </div>

                    {/* Quantity */}

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Quantity</span>
                      </label>
                    <input type="number" placeholder="Enter Quantity" className="input input-bordered w-full max-w-xs" {...register("orderQuantity",
                    {
                       min: 18, max: 99
                    }
                    
                    )}/>
                      <label className="label">
                      {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity?.message}</span>}   
                      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}   
                      </label>
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Phone</span>
                      </label>
                    <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full max-w-xs" {...register("phone")}/>

                    <label className="label">
                        
                      </label>
                    </div>

                    <input className="btn btn-accent w-full max-w-xs text-white mt-4" type="submit" value="Sign Up" />
                </form>

            </div>
         </div>
    </div>
      </div>
    );
};

export default Purchase;