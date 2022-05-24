import React from 'react';

const BusinessSummary = () => {
    return (
        <div className=" bg-base-200">
            <h1 className="text-5xl text-center text-accent font-bold">MILLIONS BUSINESS TRUST US</h1>
            <h4 className="text-xl text-center font-bold mt-2 text-primary">TRY TO UNDERSTAND USERS EXPECTATION</h4>
           <div className="flex items-center justify-center py-8">
                <div class="stats shadow stats-vertical lg:stats-horizontal">
                    
                    <div class="stat">
                        <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">Total Sales</div>
                        <div class="stat-value text-primary">25.6K+</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Happy Clients</div>
                        <div class="stat-value text-secondary">2.7M+</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                    
                    <div class="stat">
                        <div class="stat-title">Deliveries DOne</div>
                        <div class="stat-value text-primary">97%</div>
                        
                        <div class="stat-desc text-secondary">12 deliveries remaining</div>
                    </div>
                    
               </div>
           </div>
        </div>
    );
};

export default BusinessSummary;