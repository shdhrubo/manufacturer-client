import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Review from "../Home/Review";
import baseUrl from "../../api/baseUrl";

const AllReviews = () => {
  const [loading, setLoading] = useState(true);

  const { data: reviews, isLoading } = useQuery(["reviews"], () =>
    fetch(`${baseUrl}/reviews`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .finally(() => {
        setLoading(false);
      }),
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            All Customer Reviews
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Read what thousands of clients worldwide have to say about our
            components and services.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews?.map((review) => (
              <Review review={review} key={review._id}></Review>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
