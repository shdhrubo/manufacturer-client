import React from "react";
import mail from "../../images/mail2.png";
const NewsLetter = () => {
  return (
    <div>
      <h2 className="text-xl text-blue-700 font-bold">Our Newsletter</h2>
      <h2 className="text-xl font-bold">Subscribe to Our Newsletter</h2>
      <div className="card w-full bg-blue-50 mt-4">
        <figure className="px-10 pt-10">
          <img src={mail} alt="Shoes" className="rounded-xl w-52" />
        </figure>
        <div className="card-body items-center text-center">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full input-bordered max-w-md"
          />
          <div className="card-actions">
            <button className="btn bg-blue-700 btn-sm ">Subscribe</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default NewsLetter;
