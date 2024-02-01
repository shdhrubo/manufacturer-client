import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

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
    <div>
      <h2 className="text-xl font-bold mb-8 mt-8">Our Sells of Last Year</h2>
      <div className="w-full flex justify-center mx-auto custom">
        <BarChart width={730} height={600} data={data}>
          <XAxis
            dataKey="name"
            height={80}
            // textAnchor="end"
            // angle={-90}
            tick={{ fontSize: 11 }}
          />
          <YAxis ticks={[200, 300, 400, 500, 600, 700, 800]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="#8884d8" barSize={65} />
        </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default LastYear;
