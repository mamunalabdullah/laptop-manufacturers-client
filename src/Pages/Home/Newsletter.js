import React from 'react';
import products from "../../assets/newsletter.jpg"

const Newsletter = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 py-20'>
            <div className='flex flex-col justify-center items-center bg-accent p-10'>
                <h2 className='text-2xl font-bold'>Join our newsletter</h2>
                <p className='my-6'>Sign up our newsletter and get more events & promotions!</p>
                <div className='flex items-center justify-center'>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered  w mr-6" />
                </div>
            </div>
            <div>
                <img src={products} alt="" />
            </div>
        </div>
    );
};

export default Newsletter;