import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h1 className="text-center text-5xl my-5 font-bold text-primary">Customer Reviews</h1>
            <div className="flex justify-content items-center ">
                <div>
                    <div class="rating">
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    </div>
                   <div>
                   <textarea class="textarea textarea-accent" placeholder="Bio"></textarea>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;