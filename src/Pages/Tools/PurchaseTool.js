import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useSingleTool from '../../Hooks/useSingleTool';

const PurchaseTool = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool] = useSingleTool(id);


    const purchaseTool = e => {
        e.preventDefault();
        const availableOld = parseInt(tool.available);
        const minimum = parseInt(tool.order);
        const newOrder = parseInt(e.target.newOrder.value);
        

        if (availableOld > minimum && minimum <= newOrder) {
            const available = availableOld - newOrder;
            const updateAvailable = { available }
            const url = `http://localhost:5000/update/${id}`;
            console.log(url);
            fetch(url, {
                method: 'PUT',

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    updateAvailable
                ),
            })
                .then(response => response.json())
                .then(data => {
                    e.target.reset();
                    // toast(' success')
                    console.log(data);

                });
        } else {
            alert('minimum order not correct');
        }

    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card max-w-lg bg-base-200 shadow-xl">
                    <figure><img src={tool.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{tool.name}</h2>
                        <p>{tool.des}</p>
                        <form>
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
                                <input type="text" name='totalPrice' className="input input-bordered" disabled />
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
                            <button className='btn max-w-full' type="submit">
                                Purchase
                            </button>
                        </form>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <div className="card-body">
                        <form onSubmit={purchaseTool}>
                            <input className='input w-full max-w-full mb-2' type='number' name='newOrder' placeholder="Enter quantity number" />
                            <button className='btn' type="submit">
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