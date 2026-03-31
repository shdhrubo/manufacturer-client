import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SendUsEmail from "./SendUsEmail";
import callus from "../../images/callus.jpeg";

const Contact = () => {
  const contactDetails = [
    {
      icon: faPhone,
      label: "Call Us Anytime",
      value: "+880 1612 939 235",
      href: "tel:+8801612939235",
    },
    {
      icon: faEnvelope,
      label: "Email Address",
      value: "shorifulhabib.iit@gmail.com",
      href: "mailto:shorifulhabib.iit@gmail.com",
    },
    {
      icon: faFacebookF,
      label: "Facebook",
      value: "facebook.com/solver",
      href: "#",
    },
    {
      icon: faGlobe,
      label: "Website",
      value: "solver.com",
      href: "#",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="pt-24 pb-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">
          Reach Out
        </h2>
        <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
            Touch
          </span>
        </p>
        <p className="mt-4 text-lg text-gray-500 font-light max-w-xl mx-auto">
          Our team is always ready to help. Reach out to us via any channel
          below.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-8 rounded-full"></div>
      </div>

      {/* Main Grid: Info Card + Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Info Card */}
          <div className="lg:w-5/12 w-full">
            <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-[2.5rem] p-10 h-full text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
              {/* Abstract background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-3">
                  Contact Information
                </h3>
                <p className="text-blue-200 font-light mb-12">
                  Fill out the form or contact us using these details.
                </p>

                <div className="flex flex-col gap-8">
                  {contactDetails.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-5 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors duration-300">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-white"
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white font-semibold group-hover:text-cyan-200 transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* SOLVER branding at bottom */}
                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-2xl font-extrabold">SOLVER</p>
                  <p className="text-blue-300 font-light text-sm mt-1">
                    Manufacturing Company
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Send Us Email Form */}
          <div className="lg:w-7/12 w-full bg-white rounded-[2.5rem] p-10 shadow-xl shadow-blue-900/5 border border-gray-100">
            <SendUsEmail />
          </div>
        </div>

        {/* Call Us Section */}
        <div className="mt-16 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden">
              <img
                src={callus}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                alt="Call Us"
              />
            </div>
            <div className="w-full lg:w-1/2 p-10 lg:p-14 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-widest uppercase text-xs mb-6">
                <FontAwesomeIcon icon={faPhone} />
                <span>24/7 Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Feel Free to <span className="text-blue-600">Call Us</span>
              </h2>
              <p className="text-lg text-gray-500 font-light mb-8">
                We are available 24 hours a day, 7 days a week. Our dedicated
                support team is always here to help you with any question.
              </p>
              <a
                href="tel:+8801612939235"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} />
                +880 1612 939 235
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
