import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import repairing from "../../images/repairing.jpg";
const WhyUs = () => {
  const { data: why, isLoading } = useQuery("why", () =>
    fetch("https://manufacturer-xvzb.onrender.com/whyus").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-blue-700 font-bold mt-16">Why Us</h2>
      <div className="bg-blue-50 p-10 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 ">
          {why.map((w) => (
            <div key={w.id}>
              <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                  <div className="w-24 mx-auto">
                    <img src={w.img} alt="" className="w-full " />
                  </div>
                  <h2 class="card-title mx-auto text-blue-700">{w.title}</h2>
                  <p>{w.description}</p>
                  <Link to={"/about"}>
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
