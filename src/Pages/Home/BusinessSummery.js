import { faDisplay, faHeart, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { BiWorld } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='px-12 py-20'>
            <div className='text-center mb-10'>
                <h2 className='text-error font-bold text-4xl uppercase mt-8'>Business Summery</h2>
                <p className='text-xl my-6'>To our clients, our company is name of expectation</p>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full">
                <div className="stat text-center">
                    <div className="stat-figure">
                        <BiWorld className=' text-5xl text-secondary' />
                    </div>
                    <div className="stat-value text-secondary">72</div>
                    <div className="text-xl">Countries</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-figure text-primary">
                        <FontAwesomeIcon className='text-primary' icon={faDisplay} size="3x" />
                    </div>
                    <div className="stat-value text-black">1000+</div>
                    <div className="text-xl">Complete Projects</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon className=' text-red-700' icon={faHeart} size="3x" />
                    </div>
                    <div className="stat-value text-secondary">500+</div>
                    <div className="text-xl">Feedbacks</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-figure text-violet-500">
                        <FontAwesomeIcon icon={faUsersBetweenLines} size="3x" />
                    </div>
                    <div className="stat-value text-black">500+</div>
                    <div className="text-xl">Happy Clients</div>
                </div>

                
            </div>

        </div>
    );
};

export default BusinessSummery;