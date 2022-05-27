import React from 'react';
import nFound from "../../assets/notFound.gif"

const NotFound = () => {
    return (
        <div className=' max-w-screen-lg mx-auto'>
            <img className='w-full mx-auto' src={nFound} alt="" />
        </div>
    );
};

export default NotFound;