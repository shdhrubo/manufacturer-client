import React from "react";
import sell from "../../images/sell.jpg";
import integrating from "../../images/integrating.jpg";
import repairing from "../../images/repairing.jpg";
import "./OurService.css";
const OurService = () => {
  return (
    <div>
      <div className="bg-blue-50 p-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  ">
        <div class="card w-auto bg-base-100 shadow-xl  hovering">
          <figure class="px-10 pt-1">
            <img src={sell} alt="" class="rounded-full w-24" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold title-color">Part Selling</h2>

            <p className="text-sm">
              We sell more than 10 parts.We sell our parts in very cheap price.
            </p>
          </div>
        </div>
        <div class="card w-auto bg-base-100 shadow-xl hovering">
          <figure class="px-10 pt-1 ">
            <img src={integrating} alt="Shoes" class="rounded-full w-24" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold title-color">Part Integration</h2>

            <p className="text-sm">
              One of our service is part integration.We integrate the parts by
              our experts.
            </p>
          </div>
        </div>
        <div class="card w-auto bg-base-100 shadow-xl hovering">
          <figure class="px-10 pt-1">
            <img src={repairing} alt="Shoes" class="rounded-full w-24" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold title-color">Part Repairing</h2>

            <p className="text-sm">
              Our another service is part repairing.Our repairing team is here
              to repair your parts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
