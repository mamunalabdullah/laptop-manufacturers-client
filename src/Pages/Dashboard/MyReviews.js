import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "../../Firebase/firebase.init";

const MyReviews = () => {
    const [review, setReview] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user);
    const handleReview = event => {
        event.preventDefault();
        const image = event.target.image.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const feedback = event.target.feedback.value;
        const rating = event.target.rating.value;
        const review = {image, name, email, feedback, rating};
        const url = "http://localhost:5000/review";
        
        axios.post(url, review)
    .then(res => {
        console.log(res)
        event.target.reset()
        toast("Review Add")   
    })
    }
    return (
        <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-200">
      <div class="card-body">
        <form onSubmit={handleReview}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Image</span>
          </label>
          {user.photoURL? <input type="text" value={user?.photoURL} name="image" class="input input-bordered" /> : <input type="text" name="image" class="input input-bordered" />}
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" value={user?.displayName} name="name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" value={user?.email} name="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Feedback</span>
          </label>
          <input type="text" placeholder='Enter your feedback' name="feedback" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Ratings</span>
          </label>
          <input type="number" placeholder='Enter your ratings' name="rating" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Review</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default MyReviews;