import React from "react";

const TestimonialCard = () => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        
          <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src="https://api.lorem.space/image/face?hash=55350" />
          </div>
        </div>
        
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h3 className="text-info text-3xl font-bold"> star</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
