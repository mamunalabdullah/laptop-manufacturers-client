import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTool = ({tool}) => {
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/tool/${id}`);
    }
    return (
      <div className="card lg:max-w-lg bg-base-300 shadow-xl">
        <figure>
          <img
            src={tool.img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-secondary">{tool.name} !!!</h2>
          <p>{tool.des}</p>
          <p className="text-primary text-xl font-bold">Available Quantity: {tool.available}</p>
          <p className="text-error text-xl font-bold">Minimum Order: {tool.order}</p>
          <p className="text-warning text-xl font-bold">Price per Quantity: ${tool.price}</p>
          <div className="card-actions justify-end">
            <label className="btn btn-primary" onClick={() => handlePurchase(tool._id)}>Buy Now</label>
          </div>
        </div>
      </div>
    );
  };

export default SingleTool;