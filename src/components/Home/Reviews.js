import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Review from "./Review";
import baseUrl from "../../api/baseUrl";

const Reviews = () => {

  const { data: reviews, isLoading } = useQuery(["reviews"], () =>
    fetch(`${baseUrl}/reviews`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // Create a copy before slicing so we don't mutate state directly if re-rendered
  const sortedReviews = reviews ? [...reviews] : [];
  const slicedReviews = sortedReviews.splice(0, 3);

  return (
    <div className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Our Customer Reviews
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {slicedReviews?.map((review) => (
              <Review review={review} key={review._id}></Review>
            ))}
          </div>

          <Link to={"/reviews"} className="mt-12">
            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center shadow-md">
              See All Reviews
              <FontAwesomeIcon
                className="ml-3 group-hover:translate-x-1 transition-transform"
                icon={faArrowRight}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
