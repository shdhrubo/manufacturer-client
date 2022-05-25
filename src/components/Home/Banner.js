import React from "react";
import banner from "../../images/banner.jpg";
const Banner = () => {
  return (
    <div class="hero p-10 bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div className="lg:text-left ">
          <h1 className="text-4xl font-bold text-blue-700">
            <span>SOLVER</span>
            <br />
            Manufacturing Company
          </h1>
          <p class="py-6">
            Every computer parts you want to get is availabe to solver.We solve
            all your need at reasonable price!
          </p>
          <button class="btn  bg-blue-700">Get Started</button>
        </div>
        <img
          src={banner}
          class="max-w-sm w-full rounded-lg shadow-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
