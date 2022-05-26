import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user || user1){
        navigate(from,{replace:true});
        // navigate('/');
    }

    let errorElement;
    if(error || error1){
        errorElement = <p className="text-red-500">{error?.message || error1.message}</p>
    }

    if(loading || loading1){
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent font-bold text-5xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                       <div className="form-control w-full max-w-xs">
                          <label className="label">
                             <span className="label-text">Email</span>
                          </label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" {...register("email", { required:{
                            value: true,
                            message: 'Email is Required'
                        }  })}/>
                          <label className="label">
                          {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}   
                          </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                             <span className="label-text">Password</span>
                          </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" {...register("password", { required:{
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength:{
                            value:8,
                            message: 'Must be at least 8 characters'
                        }
                        })}/>
                          <label className="label">
                          {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}   
                          {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}   
                          </label>
                        </div>
                        
                        {errorElement}
                        <input className="btn btn-accent w-full max-w-xs text-white" type="submit" value="Login" />
                    </form>
                    <p className="text-primary mt-3">New to SS Productions? <Link className="text-accent font-bold" to="/signup">Create an account</Link></p>
                    <div className="divider">OR</div>

                    <button className="btn btn-outline btn-accent " onClick={() => signInWithGoogle()}>Continue With Google</button>

                </div>
             </div>
        </div>
    );
};

export default Login;