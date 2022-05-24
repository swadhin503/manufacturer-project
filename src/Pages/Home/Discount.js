import React from 'react';
import discount from '../../images/discount.webp';

const Discount = () => {
    return (
        <div className="hero min-h-screen bg-base-200 -my-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={discount} className="max-w-xs rounded-lg shadow-2xl mr-4" alt="" />
                <div>
                <h1 className="text-5xl font-bold text-center text-accent">Hot News!</h1>
                <p className="py-6 text-center text-xl">10% discount on all products is coming on December,2022</p>
               
                </div>
            </div>
        </div>
    );
};

export default Discount;