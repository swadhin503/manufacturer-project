import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Discount from './Discount';
import Graph from './Graph';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Discount></Discount>
           <BusinessSummary></BusinessSummary>
           <Graph></Graph>
        </div>
    );
};

export default Home;