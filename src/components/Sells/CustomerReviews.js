import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomerReviews = () => {
  const data = [
    {
      name: "reviews",
      oneStar: 20,
      twoStar: 10,
      threeStar: 50,
      fourStar: 100,
      fiveStar: 200,
    },
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mt-8">Our Customers Reviews</h2>
      <div className="w-full flex justify-center mx-auto mt-8">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="oneStar" fill="#8884d8" />
          <Bar dataKey="twoStar" fill="#82ca9d" />
          <Bar dataKey="threeStar" fill="pink" />
          <Bar dataKey="fourStar" fill="orange" />
          <Bar dataKey="fiveStar" fill="red" />
        </BarChart>
      </div>
    </div>
  );
};

export default CustomerReviews;
