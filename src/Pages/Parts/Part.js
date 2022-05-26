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
        <div className="card card-compact bg-base-100 shadow-xl p-6">
            <figure><img className="max-w-xs" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-accent">{name}</h2>
                <p>Unit Price: ${price}</p>
                <p>Minimum Order: {minOrder}</p>
                <p>Available: {available}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>handleNavigate(_id)} className="btn btn-accent text-white">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;