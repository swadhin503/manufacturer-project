import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=> res.json())
        .then(data=> setItems(data))
    },[])
    return (
        <div className="bg-base-200 py-8 p-12">
            <h1 className="text-center text-5xl text-accent font-bold mb-8">Our Products</h1>
            <div className="grid gird-cols-1 lg:grid-cols-3 gap-5">
            {
                items.map(item=><Part
                key={item._id}
                item={item}
                ></Part>)
            }
            </div>
        
            
        </div>
    );
};

export default Parts;