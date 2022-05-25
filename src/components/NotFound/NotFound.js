import React from "react";
import notfound from "../../images/notfound.jpg";
const NotFound = () => {
  return (
    <div>
      <img
        style={{ width: "500px" }}
        src={notfound}
        alt=""
        className="mx-auto"
      />
      <p className="text-2 text-red-500 font-bold">The page you are looking is not found</p>
    </div>
  );
};

export default NotFound;
