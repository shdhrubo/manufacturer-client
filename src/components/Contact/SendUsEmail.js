import React from "react";
import contact from "../../images/contact.png";
const SendUsEmail = () => {
  return (
    <div className="hero min-h-screen bg-blue-50 py-6 px-4">
      <div className="hero-content flex-col lg:flex-row ">
        <img src={contact} className="max-w-sm rounded-lg  w-full" alt="" />
        <div>
          <div className="w-full gap-5">
            <h4 className="text-xl text-blue-700 font-bold mb-4">
              Send Us Email
            </h4>
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-md mb-4  input-bordered"
            />

            <input
              type="text"
              placeholder="Subject"
              className="input w-full  input-bordered max-w-md mb-4"
            />
            <textarea
              className="textarea w-full input-bordered max-w-md mb-4"
              placeholder="Your message"
              rows={2}
            ></textarea>
            <br />
            <input type="submit" value="Submit" className="btn bg-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendUsEmail;
