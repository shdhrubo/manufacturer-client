import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const [why, setWhy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/whyus")
      .then((res) => res.json())
      .then((data) => setWhy(data));
  });
  return (
    <div>
      <h2 className="text-2xl text-blue-700 font-bold mt-16">Why Us</h2>
      <div className="bg-blue-50 p-10 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 ">
          {why.map((w) => (
            <div key={w.id}>
              <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title mx-auto text-blue-700">{w.title}</h2>
                  <p>{w.description}</p>
                  <Link to={"/"}>
                    <button className="btn btn-sm bg-blue-700">
                      Know Us
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-1"
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
