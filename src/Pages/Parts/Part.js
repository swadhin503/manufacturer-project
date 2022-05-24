import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({item}) => {
    const {_id,name,picture,price,description,minOrder,available} = item;
    // console.log(item.name)
    const navigate = useNavigate();
    const handleNavigate= (id)=>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card card-compact bg-base-100 shadow-xl p-6">
            <figure><img className="max-w-xs" src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-accent">{name}</h2>
                <p>Price: ${price}</p>
                <p>Minimum Order: {minOrder}</p>
                <p>Available: {available}</p>
                <p>Description: {description}</p>
                <div class="card-actions justify-end">
                <button onClick={()=>handleNavigate(_id)} class="btn btn-accent text-white">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;