import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Review = ({ review }) => {
  const { user, userName, reviews, ratings, photo } = review;
  const ratingsIcon = [];
  for (var i = 1; i <= ratings; i++) {
    ratingsIcon.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);
  }
  const [currentUser] = useAuthState(auth);
  console.log(currentUser);
  return (
    <div>
      <div class="card w-full  bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="avatar mx-auto ">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
              <img className="" src={photo} alt="" />
            </div>
          </div>
          <h2 class="card-title">{userName}</h2>
          <p className="text-left">
            {ratingsIcon.map((ratingIcon) => (
              <span className="text-amber-500 mr-1">{ratingIcon}</span>
            ))}
          </p>
          <p className="text-left">" {reviews} "</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
