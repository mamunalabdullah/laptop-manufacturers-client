import React from "react";
import { FaHeadset, FaTools, FaHandsHelping, FaEuroSign } from "react-icons/fa";

const BusinessSummary = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-20">
      <div className="card lg:max-w-lg bg-info shadow-xl">
        <figure className="px-10 pt-10">
          <div className="font-bold text-5xl text-warning">
            <FaHeadset />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">100+ customers Support</h2>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-info shadow-xl">
        <figure className="px-10 pt-10">
          <div className="font-bold text-5xl text-warning">
            <FaEuroSign />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">5M+ Annual Revenue</h2>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-info shadow-xl">
        <figure className="px-10 pt-10">
          <div className="font-bold text-5xl text-warning">
            <FaHandsHelping />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">20K+ Reviews</h2>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-info shadow-xl">
        <figure className="px-10 pt-10">
          <div className="font-bold text-5xl text-warning">
            <FaTools />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">10+ Tools Manufacture</h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
