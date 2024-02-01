import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactUs from "../Home/ContactUs";
import SendUsEmail from "./SendUsEmail";
import callus from "../../images/callus.jpeg";
const Contact = () => {
  return (
    <div>
      <h2 className="text-xl text-blue-700 font-bold mb-4">Contact Us</h2>
      <div className="bg-blue-50 py-10 ">
        <div className="bg-blue-50 py-6 px-4 mx-10 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  mb-10 ">
            <div className="lg:mx-auto text-left">
              <h2 className="text-xl text-blue-700 font-bold ">SOLVER</h2>
              <h2 className="text-xl text-blue-700 font-bold">
                Manufacturing Website
              </h2>
            </div>
            <div className="text-left lg:mx-auto">
              <a href="" className="text-sm ">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>{" "}
                www.facebook.com/solver
              </a>
              <p>
                <a href="tel:+8801612939235" className="text-sm ">
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                  +8801612939235{" "}
                </a>
              </p>
              <p>
                <a href="" className="text-sm ">
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> solver.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-base-100 py-6 px-4 rounded-xl mt-12">
            <div className="hero  bg-base-100">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={callus}
                  className="max-w-sm rounded-lg w-full"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-bold">Feel Free to Call</h1>
                  <p className="py-6">
                    We are available for 24/7 for helping you if you need!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SendUsEmail></SendUsEmail>
      </div>
    </div>
  );
};

export default Contact;
