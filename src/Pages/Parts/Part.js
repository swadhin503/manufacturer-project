import React from 'react';

const Part = ({item}) => {
    const {id,name,picture,price,description,minOrder,available} = item;
    console.log(item.name)
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img className="max-w-xs" src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-accent">{name}</h2>
                <p>Price: ${price}</p>
                <p>Minimum Order: {minOrder}</p>
                <p>Available: {available}</p>
                <p>Description: {description}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-accent text-white">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;