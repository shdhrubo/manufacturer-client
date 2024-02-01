import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.jpg";
import team3 from "../../images/team3.jpg";
const Teams = () => {
  return (
    <div>
      <h2 className="text-2xl text-blue-700 font-bold mt-16">Our Team</h2>
      <h1 className="text-xl text-blue-700 font-bold ">
        Meet Our Expert Team Member
      </h1>
      <div className="bg-blue-50 p-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
        <div class="card w-auto bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={team3} alt="" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold ">John De</h2>
            <h1 class="font-bold ">-CEO</h1>
            <div class="grid grid-flow-col gap-8 text-xl">
              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>

              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>

              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
            </div>
            <p className="text-sm">
              CEO is responsible for managing a company's overall operations and
              communicating with the board.
            </p>
          </div>
        </div>
        <div class="card w-auto bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={team2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold">Harry Bekar</h2>
            <h1 class="font-bold ">-CTO</h1>
            <div class="grid grid-flow-col gap-8 text-xl">
              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>

              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>

              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
            </div>
            <p className="text-sm">
              Our CTO is the highest technology executive position in company
              who leads the technology or engineering department.
            </p>
          </div>
        </div>
        <div class="card w-auto bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={team1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold">Ederson Mcmohon</h2>
            <h1 class="font-bold ">-Software Engineer</h1>
            <div class="grid grid-flow-col gap-8 text-xl">
              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>

              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>

              <a href="" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
            </div>
            <p className="text-sm">
              Our software engineer makes the user experience better and the
              software more efficient by different technique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
