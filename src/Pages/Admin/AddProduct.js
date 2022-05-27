import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        
    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-primary my-5">Add a Product</h1>
            <div className="flex justify-center items-center my-10">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Product Name</span>
                      </label>
                    <input type="text" placeholder="Enter Product Name" className="input input-bordered w-full max-w-xs" {...register("name", { required:{
                        value: true,
                        message: 'Name is Required'
                    }  })}/>
                      <label className="label">
                      {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}   
                      </label>
                    </div>

                   <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Photo Url</span>
                      </label>
                    <input type="text" placeholder="Enter Photo url" className="input input-bordered w-full max-w-xs" {...register("picture")}/>
                      <label className="label">  </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Product Price</span>
                      </label>
                    <input type="number" placeholder="Enter Product Price" className="input input-bordered w-full max-w-xs" {...register("price")}/>
                      <label className="label">  </label>
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Description</span>
                      </label>
                    <textarea type="text" placeholder="Enter Product Description" className="input input-bordered w-full max-w-xs" {...register("description")}/>
                      <label className="label"></label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Minimum Order</span>
                      </label>
                    <input type="number" placeholder="Enter Minimum Order" className="input input-bordered w-full max-w-xs" {...register("minOrder")}/>
                      <label className="label"></label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                         <span className="label-text">Product Available</span>
                      </label>
                    <input type="number" placeholder="Enter Available Product" className="input input-bordered w-full max-w-xs" {...register("available")}/>
                      <label className="label"></label>
                    </div>

                    
                    <input className="btn btn-accent w-full max-w-xs text-white mt-4" type="submit" value="Add Product" />
                     </form>
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default AddProduct;