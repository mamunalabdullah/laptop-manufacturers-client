import React from "react";

const TestimonialCard = ({review}) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        
          <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src={review.image} />
          </div>
        </div>
        
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{review.name}</h2>
        <p>{review.feedback}</p>
        <h3 className="text-info text-3xl font-bold">{review.rating} star</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
