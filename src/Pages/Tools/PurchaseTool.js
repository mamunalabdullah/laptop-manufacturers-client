import React from "react";

const PurchaseTool = ({ item }) => {
  const { name, available, order, price } = item;
  const handleOrder = event => {
    event.preventDefault();
    // const oldOrder = event.target.oldOrder.value;
    // const oldPrice = event.target.oldPrice.value;
    // const order = event.target.order.value;
    // const price = event.target.price.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log(order,name,email,phone);
  }
  return (
    <div>
      <input type="checkbox" id="purchaseModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="purchaseModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-center text-secondary">
            {name} Purchase...
          </h3>
          <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-error font-bold">
                  Available Quantity:
                </span>
              </label>
              <input
                type="number"
                value={available}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-error font-bold">
                  Minimum Order:
                </span>
              </label>
              <input
                name="oldOrder"
                type="number"
                value={order}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-error font-bold">
                  Price per Unit:
                </span>
              </label>
              <input
                name="oldPrice"
                type="number"
                value={price}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-info font-bold">
                  Make Your Order:
                </span>
              </label>
              <input
                name="order"
                type="number"
                placeholder="enter your quantity"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-info font-bold">Your Price:</span>
              </label>
              <input
                name="price"
                type="text"
                value="enter your quantity"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                name="name"
                type="text"
                placeholder="Enter your Name here"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                name="email"
                type="email"
                placeholder="Enter your Email here"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                name="phone"
                type="text"
                placeholder="Enter your Phone Number here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              type="submit"
              value="Order Now"
              className="btn btn-primary input input-bordered w-full max-w-xs"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTool;
