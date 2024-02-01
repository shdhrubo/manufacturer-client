import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="">
      <footer class="footer p-10 bg-blue-50 text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>

      
      </footer>
      <footer className="footer  bg-blue-50 px-10 py-4">
          <p className="font-bold footer-title">SOLVER Manufacturing Company</p>
        </footer>
      <footer class="footer px-10 py-4 border-t bg-blue-50 text-base-content border-base-300">
        <div class="items-center grid-flow-col">
          <p>
        	&#169; Designed and Developed By <a href="https://shorifulhabib.netlify.app/"><span className="text-blue-700 font-bold link link-hover">Shoriful Habib</span></a>
            <br />
            
          </p>

        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/shorifulhabib/">
          <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
            </a>
            <a href="https://github.com/shdhrubo">
          <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
            </a>
            <a href="mailto:shorifulhabib.iit@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
            </a>
           
          
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
