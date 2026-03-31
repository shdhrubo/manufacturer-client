import React from "react";
import baseUrl from "../../api/baseUrl";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPenToSquare,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
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

    fetch(`${baseUrl}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`Review Added Successfully`);
        event.target.reset();
      });
  };

  return (
    <div className="p-4 md:p-10 bg-gray-50/50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-left mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-1 flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-xs" />
            Feedback
          </h2>
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Share Your Experience
          </h3>
          <p className="text-gray-500 mt-2 font-light italic text-sm">
            We value your honest opinion. Let us know how our components worked
            for you!
          </p>
        </div>

        {/* Review Form Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 transition-all duration-300">
          <form onSubmit={handleAddReviews} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="form-control">
                <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                  Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.displayName || ""}
                  className="input input-bordered bg-gray-100/50 text-gray-600 cursor-not-allowed rounded-xl text-sm font-semibold border-gray-100"
                />
              </div>
              <div className="form-control">
                <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                  Email
                </label>
                <input
                  type="email"
                  readOnly
                  value={user?.email || ""}
                  className="input input-bordered bg-gray-100/50 text-gray-600 cursor-not-allowed rounded-xl text-sm font-semibold border-gray-100"
                />
              </div>
            </div>

            <div className="form-control text-left">
              <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                Your Review
              </label>
              <div className="relative">
                <textarea
                  name="reviews"
                  rows="4"
                  className="textarea textarea-bordered w-full focus:border-blue-500 rounded-xl text-base p-4 pl-12 h-40 transition-all"
                  placeholder="Tell us what you think..."
                  required
                ></textarea>
                <FontAwesomeIcon
                  icon={faMessage}
                  className="absolute top-4 left-4 text-gray-300"
                />
              </div>
            </div>

            <div className="form-control text-left">
              <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                Rating (1-5)
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  max={5}
                  min={1}
                  name="ratings"
                  placeholder="5"
                  className="input input-bordered w-full max-w-[150px] focus:border-blue-500 rounded-xl text-sm py-6 pl-12"
                  required
                />
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="absolute left-4 text-gray-300"
                />
                <span className="ml-4 text-xs font-bold text-gray-400 italic">
                  Stars selected
                </span>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white rounded-full font-extrabold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
              >
                Post Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
