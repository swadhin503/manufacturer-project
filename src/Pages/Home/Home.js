import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Discount from './Discount';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Discount></Discount>
           <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;