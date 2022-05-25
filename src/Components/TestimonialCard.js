import React from "react";

const TestimonialCard = ({review}) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        
          <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src={review.image} />
          </div>
        </div>
        
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{review.name}</h2>
        <p>{review.feedback}</p>
        <h3 className="text-info text-3xl font-bold">{review.rating} star</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
