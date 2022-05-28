import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const UpdateProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [user,loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    // console.log(user);
    const imageStorageKey = '6aa95cf5afaa45a256361f751c130c5f';

    const onSubmit = async data => {
        // console.log(data)
        const image= data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(result =>{
            if(result.success){
                const image = result.data.url;
                const infos = {
                    name: data.name,
                    email: data.email, 
                    img:image,
                    address: data.address
                }
               fetch(`http://localhost:5000/user/${user.email}`,{
                   method: 'PUT',
                   headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(infos)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                toast.success('Updated Successfully')
               }) 
            }
            // console.log(result)
        })
    }
    return (
        <div>
             <div className="flex justify-center items-center my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-accent font-bold text-5xl">Update Profile</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Name</span>
                      </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" {...register("name")}/>
                      <label className="label">
                     
                      </label>
                    </div>

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Email</span>
                      </label>
                    <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" {...register("email")}/>
                      <label className="label">
                      
                      </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Pictue</span>
                      </label>
                    <input type="file" placeholder="image" className="input input-bordered w-full max-w-xs" {...register("img")}/>
                      <label className="label">
                    
                      </label>
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Address</span>
                      </label>
                    <input type="text" placeholder="Enter Your Address" className="input input-bordered w-full max-w-xs" {...register("address")}/>

                    <label className="label">
                        
                      </label>
                    </div>

                    <input className="btn btn-accent w-full max-w-xs text-white mt-4" type="submit" value="Update Profile" />
                </form>

            </div>
         </div>
    </div>
        </div>
    );
};

export default UpdateProfile;