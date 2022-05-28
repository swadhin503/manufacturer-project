import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/order/${id}`
    const [order,setOrder] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setOrder(data))
    },[url])

    const stripePromise = loadStripe('pk_test_51L4RGBKIFiKiZZYmqNVbrbnqi5BCmVdUwTCykS8roEdEzO4qVzK9r6x5rm7qL6s6nsRf0x9EGVBZRGIxtSsqz9Z700lUrhKb9m');

    return (
        <div >
            <div class="card w-96 shadow-xl bg-base-100">
                <div class="card-body my-12">
                        <h2 class="text-xl text-primary">Hello, {order.name}</h2>
                        <h2 class="card-title">Pay For {order.product_name}</h2>
                        
                        <p>Please, pay $ {order.total}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                 </Elements>
               </div>
            </div>
        </div>
            
         
    );
};

export default Payment;