import React from "react";
import SendUsEmail from "../Contact/SendUsEmail";

const ContactUs = () => {
  return (
    <div>
      <div className="text-center mt-12 text-white">
        <h1 className="text-2xl font-bold  text-blue-700">Contact Us</h1>
        <h1 className="text-xl text-black font-bold">Stay Connected With Us</h1>
      </div>
      <div className="mt-4 mb-12">
        <SendUsEmail></SendUsEmail>
      </div>
    </div>
  );
};

export default ContactUs;
