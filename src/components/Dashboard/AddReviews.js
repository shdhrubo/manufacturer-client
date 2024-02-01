import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReviews = () => {
  const [user] = useAuthState(auth);
  const handleAddReviews = (event) => {
    event.preventDefault();

    const postReviews = {
      user: user.email,
      userName: user.displayName,
      reviews: event.target.reviews.value,
      ratings: event.target.ratings.value,
      photo: user.photoURL,
    };
    fetch("https://manufacturer-xvzb.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`Review Added Successfylly`);
        event.target.reset();
      });
  };
  return (
    <div>
      <h4 className="text-blue-700 font-bold">Add a Review</h4>
      <form
        onSubmit={handleAddReviews}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email}
          className="input input-bordered w-full max-w-xs"
        />

        <textarea
          name="reviews"
          rows="10"
          cols="50"
          className="input input-bordered w-full max-w-xs h-20"
          placeholder="Write something about us..."
        ></textarea>
        <input
          type="number"
          max={5}
          min={1}
          name="ratings"
          placeholder="Ratings"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Submit"
          className="btn bg-blue-700 w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddReviews;
