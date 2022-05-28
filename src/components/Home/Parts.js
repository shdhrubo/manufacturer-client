import React, { useEffect, useState } from "react";
import Part from "./Part";
const Parts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mysterious-bastion-07906.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        const sliced = data.slice(0, 6);
        setParts(sliced);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold text-blue-700">Parts We Provide</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-8">
          {parts.map((part) => (
            <Part part={part} key={part.id}></Part>
          ))}
        </div>
      )}
    </div>
  );
};

export default Parts;
