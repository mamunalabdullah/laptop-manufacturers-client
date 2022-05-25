import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useSingleTool from '../../Hooks/useSingleTool';

const PurchaseTool = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool] = useSingleTool(id);
    const [price, setPrice] = useState(0);



    const purchaseTool = e => {
        e.preventDefault();
        const newOrder = parseInt(e.target.newOrder.value);
        const available = parseInt(e.target.available.value);
        const order = parseInt(e.target.order.value);
        const image= e.target.image.value;
        const toolName= e.target.toolName.value;
        const price = parseInt(e.target.price.value);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const totalPrice = parseInt(e.target.totalPrice.value) * price;
        const phone = e.target.phone.value;

        const updatePrice = {totalPrice};
        const item = {name, email, phone, updatePrice, newOrder, image, toolName, available,order, totalPrice };
        setPrice(totalPrice);
        const url = `http://localhost:5000/order`;
        axios.post(url, item)
        .then(res => {
            console.log(res)
            e.target.reset()
        })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card max-w-lg bg-base-200 shadow-xl">
                    <figure><img src={tool.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{tool.name}</h2>
                        <p>{tool.des}</p>
                        <form onSubmit={purchaseTool}>

                            <label className="input-group mb-2">
                                <span>Tool Image URL:</span>
                                <input type="text" name='image' value={tool.img} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Tool Name:</span>
                                <input type="text" name='toolName' value={tool.name} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Available Quantity:</span>
                                <input type="text" name='available' value={tool.available} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Minimum Purchase Quantity:</span>
                                <input type="text" name='order' value={tool.order} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Price per Quantity</span>
                                <input type="text" name='price' value={tool.price} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Total Price:</span>
                                <input type="text" value={price.totalPrice} name='totalPrice' className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Name</span>
                                <input type="text" name='name' value={user.displayName} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Email</span>
                                <input type="email" name='email' value={user.email} className="input input-bordered" disabled />
                            </label>
                            <label className="input-group mb-2">
                                <span>Phone Number</span>
                                <input type="text" name='phone' className="input input-bordered" />
                            </label>
                            <label className="input-group mb-2">
                                <span>Order Quantity</span>
                                <input className='input input-bordered' type='number' name='newOrder' placeholder="Enter Order quantity" />
                            </label>
                            
                            <button className='btn max-w-full' type="submit">
                                Purchase
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTool;