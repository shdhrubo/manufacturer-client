import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(["reviews"], () =>
    fetch("https://mysterious-bastion-07906.herokuapp.com/reviews", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(reviews);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-32 mb-16">
      <h4 className="text-2xl font-bold text-blue-700">Testimonial</h4>
      <h4 className="text-xl ">Our Customer Reviews</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10">
        {reviews?.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
