import React from "react";

const Introduction = () => {
  return (
    <div>
      <h2 className="text-center uppercase bg-base-200 font-bold text-xl pt-20">who are we</h2>
      <div className="hero min-h-screen bg-base-200 px-20">
      <div className="hero-content flex-col lg:flex-row-reverse mt-[-150px]">
        <img src="https://i.ibb.co/tPhVv2W/mother-boards.jpg" className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div className="ml-10">
          <h1 className="text-5xl text-primary font-bold">Laptop Manufacturers</h1>
          <p
            className="py-6"
          >
            We are laptop manufacturers. We provide laptop parts like
            motherboard, ram, lan-card, vga-port, cables, speakers, keyboard,
            mouse any many more. You can buy any items from us. You will have to
            order to buy products. You have to advance 50% while ordering the
            products...
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Introduction;
