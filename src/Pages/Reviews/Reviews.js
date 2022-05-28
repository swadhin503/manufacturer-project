import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className="text-center text-5xl my-5 font-bold text-primary">Customer Reviews</h1>
            <div className="flex justify-content items-center ">
            {/* <div className="rating rating-sm inline">
                {[...Array(5)].map((rat, ind) => <input key={ind} type="radio" name="rating-2" className={`mask mask-star-2 ${rev.rating >= ind + 1 ? "bg-orange-600" : "bg-orange-300"}`} />)}
                </div> */}
            </div>
        </div>
    );
};

export default Reviews;