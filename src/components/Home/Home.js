import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
            <Blog></Blog>
        </div>
    );
};

export default Home;