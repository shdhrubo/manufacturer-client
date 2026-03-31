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

const LastYear = () => {
  const data = [
    { name: "Jan", Total: 500, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Feb", Total: 600, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Mar", Total: 300, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Apr", Total: 500, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "May", Total: 600, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "June", Total: 400, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "July", Total: 700, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Aug", Total: 800, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Sept", Total: 700, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Oct", Total: 600, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Nov", Total: 800, WebCam: 300, RAM: 800, amt: 2200 },
    { name: "Dec", Total: 700, WebCam: 300, RAM: 800, amt: 2200 },
  ];

  return (
    <div className="w-full relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Annual Sales Revenue</h3>
          <p className="text-gray-500 font-light">Monthly breakdown of our total sales performance</p>
        </div>
        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold text-xl">
          $
        </div>
      </div>

      <div className="w-full h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.7}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#6b7280', fontSize: 13, fontWeight: 500 }} 
              axisLine={false} 
              tickLine={false} 
              dy={10}
            />
            <YAxis 
              ticks={[200, 300, 400, 500, 600, 700, 800]} 
              tick={{ fill: '#6b7280', fontSize: 13 }} 
              axisLine={false} 
              tickLine={false}
              dx={-10}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(243, 244, 246, 0.4)' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />
            <Bar 
              dataKey="Total" 
              name="Total Sales (in Thousands)" 
              fill="url(#colorTotal)" 
              radius={[6, 6, 0, 0]} 
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LastYear;
