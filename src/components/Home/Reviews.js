import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Review from "./Review";

const Reviews = () => {
  const [loading, setLoading] = useState(true);

  const { data: reviews, isLoading } = useQuery(["reviews"], () =>
    fetch("https://manufacturer-xvzb.onrender.com/reviews", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .finally(() => {
        setLoading(false);
      })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const slicedReviews = reviews.splice(0, 3);
  return (
    <div className="mt-20 mb-16">
      <h4 className="text-2xl font-bold text-blue-700">Testimonial</h4>
      <h4 className="text-xl ">Our Customer Reviews</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mt-4">
            {slicedReviews?.map((review) => (
              <Review review={review} key={review._id}></Review>
            ))}
          </div>
          <Link to={"/reviews"}>
            <button class="btn  bg-blue-700 mt-5 btn-sm">
              See All{" "}
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
              ></FontAwesomeIcon>{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Reviews;
