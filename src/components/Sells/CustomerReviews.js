import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const CustomerReviews = () => {
  const data = [
    {
      name: "Rating Count",
      oneStar: 20,
      twoStar: 10,
      threeStar: 50,
      fourStar: 100,
      fiveStar: 200,
    },
  ];

  return (
    <div className="w-full relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Customer Reviews Overview</h3>
          <p className="text-gray-500 font-light">Distribution of our historical user ratings</p>
        </div>
        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-500 font-bold text-xl">
          ★
        </div>
      </div>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{ fill: 'rgba(243, 244, 246, 0.4)' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />
            <Bar dataKey="oneStar" name="1 Star" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="twoStar" name="2 Stars" fill="#f97316" radius={[4, 4, 0, 0]} />
            <Bar dataKey="threeStar" name="3 Stars" fill="#eab308" radius={[4, 4, 0, 0]} />
            <Bar dataKey="fourStar" name="4 Stars" fill="#84cc16" radius={[4, 4, 0, 0]} />
            <Bar dataKey="fiveStar" name="5 Stars" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerReviews;
