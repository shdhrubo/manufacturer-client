import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-blue-50 px-10 py-14 mt-16 mb-16">
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold  text-blue-700">Contact Us</p>
        <h1 className="text-2xl text-blue-700">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <input type="submit" value="Submit" className="btn bg-blue-700" />
      </div>
    </div>
  );
};

export default ContactUs;
