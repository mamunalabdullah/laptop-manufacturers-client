import React from 'react';
import Banner from '../Components/Banner';
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
        </div>
    );
};

export default Home;