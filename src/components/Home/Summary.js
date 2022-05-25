import {
  faMoneyBill,
  faMoneyBill1Wave,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Summary = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-blue-700  my-6">
        Our Business Summary
      </h4>
      <div class="stats stats-vertical lg:stats-horizontal shadow ">
        <div class="stat  mr-16">
          <div>
            <FontAwesomeIcon
              className="text-3xl text-blue-700"
              icon={faUser}
            ></FontAwesomeIcon>{" "}
          </div>
          <div class="stat-value">31K+ </div>
          <div class="stat-title text-blue-700 font-bold">Customers</div>
        </div>

        <div class="stat mr-16">
          <div>
            <FontAwesomeIcon
              className="text-3xl text-blue-700"
              icon={faMoneyBill1Wave}
            ></FontAwesomeIcon>{" "}
          </div>
          <div class="stat-value">120M+</div>
          <div class="stat-title text-blue-700  font-bold">Revenue</div>
        </div>

        <div class="stat mr-16">
          <div>
            <FontAwesomeIcon
              className="text-3xl text-blue-700"
              icon={faTools}
            ></FontAwesomeIcon>{" "}
          </div>
          <div class="stat-value">10+</div>
          <div class="stat-title text-blue-700 font-bold ">Parts</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
