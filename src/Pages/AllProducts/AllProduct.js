import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ product, refetch }) => {
    const { _id, name, image, shortDetails, minOrder, available, price } = product;
    refetch();
    return (
        <div className='border-2 rounded-2xl shadow-lg py-8'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl mb-5'>{name}</h2>
                <img className='w-3/4 mx-auto rounded-xl' src={image} alt="" />
                <p className='my-6'>{shortDetails}</p>
                <h3 className='my-6 font-bold'>Price: ${price} (Per Unit)</h3>
                <div className='flex items-center px-5'>
                    <h3 className='flex-1 font-bold'>Min. Order Qun.:</h3>
                    <input type="number" value={minOrder} className="input input-bordered input-primary w-full max-w-xs flex-1" disabled />
                </div>
                <div className='flex items-center my-6 px-5'>
                    <h3 className='flex-1 font-bold'>Available In Stock: </h3>
                    <input type="number" value={available} className="input input-bordered input-primary w-full max-w-xs flex-1" disabled />
                </div>
                <Link to={`/products/${_id}`} className="btn btn-outline btn-secondary font-bold">Purchase Now</Link>

            </div>
        </div>
    );
};

export default AllProduct;