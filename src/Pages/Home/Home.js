import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Map from './map/Map';
import Newsletter from './Newsletter';
import Products from './Products';
import Review from './Review';
import UsbMember from './UsbMember';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummery />
            <Review />
            <UsbMember />
            <Newsletter />
            <Map />
            <Footer />
        </div>
    );
};

export default Home;