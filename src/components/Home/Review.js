import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ review }) => {
  const { userName, reviews, ratings, photo } = review;
  const ratingsIcon = [];
  for (var i = 1; i <= ratings; i++) {
    ratingsIcon.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>);
  }


  return (
    <div>
      <div class="card w-full  bg-base-100 border">
        <div class="card-body">
          <div class="avatar mx-auto ">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
              <img className="" src={photo} alt="" />
            </div>
          </div>
    <div>      <h2 class="card-title">{userName}</h2>
          <p className="text-left">
            {ratingsIcon.map((ratingIcon) => (
              <span className="text-amber-500 mr-1">{ratingIcon}</span>
            ))}
          </p>
          <p className="text-left">" {reviews} "</p></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
