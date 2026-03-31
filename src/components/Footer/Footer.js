import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                SOLVER
              </span>
            </h2>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              Empowering your innovation through world-class components and
              precision manufacturing. Reliability built to last.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-3 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Press kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Developer Credit */}
          <div className="text-center md:text-left text-sm text-slate-500 font-light">
            <p>&copy; {year} SOLVER Manufacturing. All rights reserved.</p>
            <p className="mt-1">
              Designed & Developed by{" "}
              <a
                href="https://shorifulhabib.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 font-semibold hover:text-cyan-400 transition-colors duration-300"
              >
                Shoriful Habib
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shorifulhabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </a>
            <a
              href="https://github.com/shdhrubo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
            <a
              href="mailto:shorifulhabib.iit@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
