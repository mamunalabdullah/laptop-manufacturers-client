import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/review`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <h1 className='text-xl uppercase text-center text-primary font-bold'>Customer Reviews</h1>
            <p className='text-center font-bold text-3xl'>Our customers provides their valuable feedback so that we can improve our services.</p>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
                {reviews.slice(0, 3).map(review => <TestimonialCard key={review._id} review={review} />)}
            </div>
        </div>
    );
};

export default Testimonials;