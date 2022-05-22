import React from 'react';
import Banner from '../Components/Banner';
import BusinessSummary from '../Components/BusinessSummary';
import Footer from '../Components/Footer';
import Introduction from '../Components/Introduction';
import Map from '../Components/Map/Map';
import Tools from '../Components/Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <Tools />
            <Map />
            <BusinessSummary />
            <Footer />
        </div>
    );
};

export default Home;