import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import banner from "../../images/aboutbanner.jpg";
import story from "../../images/story.jpg";
import vision from "../../images/vision.jpg";
import OurService from "../Home/OurService";
import OurServices from "../Home/OurServices";
import OurSummary from "../Home/OurSummary";
const About = () => {
  return (
    <div>
      <h4 className="font-bold text-blue-700 text-2xl">About Us</h4>

      <h4 className="font-bold  text-xl mt-4">
        <span>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </span>{" "}
        Our <span className="text-blue-700">Story</span>
      </h4>
      <div className="hero bg-base-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">What Motivated Us!</h1>
            <p className="py-6">
              We started with a little team.There was many fraud company in the
              market.So we decided to make people trusted to us.That motivated
              us to start a company.
            </p>
          </div>
          <img src={story} className="max-w-sm rounded-lg w-full" alt="" />
        </div>
      </div>

      <h4 className="font-bold  text-xl mt-8">
        <span>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </span>{" "}
        What We <span className="text-blue-700">Do</span>
      </h4>
      <OurService></OurService>

      <h4 className="font-bold  text-xl mt-12">
        <span>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </span>{" "}
        Our <span className="text-blue-700">Business</span> Right Now
      </h4>
      <OurSummary></OurSummary>
      <h4 className="font-bold  text-xl mt-8">
        <span>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </span>{" "}
        Our <span className="text-blue-700">Vision</span>
      </h4>
      <div className="hero  bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={vision} className="max-w-sm rounded-lg w-full" alt="" />
          <div className="text-left">
            <h1 className="text-2xl font-bold">
              We are currently working to :
            </h1>
            <p className="py-6 ">
              <ul className="">
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-700"
                  ></FontAwesomeIcon>{" "}
                  Make People More Happy
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-700"
                  ></FontAwesomeIcon>{" "}
                  Earn 200M+ Revenue
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-700"
                  ></FontAwesomeIcon>{" "}
                  Build 100+ Branch
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-700"
                  ></FontAwesomeIcon>{" "}
                  Launch 100+ Tools
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen mt-8"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">So,</h1>
            <p className="mb-5">
              If you are looking for computer manufacturing items,we are here
              for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
