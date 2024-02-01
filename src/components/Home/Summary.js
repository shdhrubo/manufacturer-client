import {
  faMoneyBill,
  faMoneyBill1Wave,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OurSummary from "./OurSummary";

const Summary = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-blue-700  my-6">
        Our Business Summary
      </h4>
    <OurSummary></OurSummary>
    </div>
  );
};

export default Summary;
