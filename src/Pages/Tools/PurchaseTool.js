import React from "react";

const PurchaseTool = ({ item }) => {
  const { name } = item;
  return (
    <div>
      <input type="checkbox" id="purchaseModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="purchaseModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name} purchase...</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="purchaseModal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTool;
