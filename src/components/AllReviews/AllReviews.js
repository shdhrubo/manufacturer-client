import React, { useState } from "react";
import { useQuery } from "react-query";

import Loading from "../Loading/Loading";
import Review from "../Home/Review";

const AllReviews = () => {
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

  return (
    <div className="mt-4 mb-16">
      <h4 className="text-2xl font-bold text-blue-700">Testimonial</h4>
      <h4 className="text-xl ">Our Customer Reviews</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-blue-50 py-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mt-4">
            {reviews?.map((review) => (
              <Review review={review} key={review._id}></Review>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllReviews;
