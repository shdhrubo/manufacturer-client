import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Part from "./Part";
import baseUrl from "../../api/baseUrl";

const Parts = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`${baseUrl}/services`).then((res) =>
      res.json(),
    ),
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Core Components
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Parts We Provide
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our curated selection of high-performance components
            suitable for varied implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((part) => (
            <Part part={part} key={part._id}></Part>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parts;
