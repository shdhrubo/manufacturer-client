import {
  faBuilding,
  faGlobe,
  faHandshake,
  faMoneyBill1Wave,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurSummary = () => {
  return (
    <div className="bg-blue-50 py-16 px-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      <div class="card w-auto bg-base-100 shadow-xl py-4 hovering">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-blue-700 mb-2"
            icon={faUser}
          ></FontAwesomeIcon>{" "}
        </div>
        <div class="items-center text-center">
          <h2 class="font-bold title-color">31K+ </h2>
          <p className="font-bold">Customers</p>
        </div>
      </div>
      <div class="card w-auto bg-base-100 shadow-xl py-4 hovering">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-blue-700 mb-2"
            icon={faMoneyBill1Wave}
          ></FontAwesomeIcon>{" "}
        </div>
        <div class="items-center text-center">
          <h2 class="font-bold title-color">120M+ </h2>
          <p className="font-bold">Revenue</p>
        </div>
      </div>
      <div class="card w-auto bg-base-100 shadow-xl py-4 hovering">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-blue-700 mb-2"
            icon={faTools}
          ></FontAwesomeIcon>{" "}
        </div>
        <div class="items-center text-center">
          <h2 class="font-bold title-color">10+ </h2>
          <p className="font-bold">Tools</p>
        </div>
      </div>
      <div class="card w-auto bg-base-100 shadow-xl py-4 hovering">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-blue-700 mb-2"
            icon={faHandshake}
          ></FontAwesomeIcon>{" "}
        </div>
        <div class="items-center text-center">
          <h2 class="font-bold title-color">20+ </h2>
          <p className="font-bold">Partners</p>
        </div>
      </div>
      <div class="card w-auto bg-base-100 shadow-xl py-4 hovering">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-blue-700 mb-2"
            icon={faBuilding}
          ></FontAwesomeIcon>{" "}
        </div>
        <div class="items-center text-center">
          <h2 class="font-bold title-color">12+ </h2>
          <p className="font-bold">Branch</p>
        </div>
      </div>
      <div class="card w-auto bg-base-100 shadow-xl py-4 hovering">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-blue-700 mb-2"
            icon={faGlobe}
          ></FontAwesomeIcon>{" "}
        </div>
        <div class="items-center text-center">
          <h2 class="font-bold title-color">5+</h2>
          <p className="font-bold">Worldwide Companies</p>
        </div>
      </div>
    </div>
  );
};

export default OurSummary;
