import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-xl uppercase text-center text-primary font-bold'>Customer Reviews</h1>
            <p className='text-center'>Our customers provides their valuable feedback so that we can improve our services.</p>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    );
};

export default Testimonials;