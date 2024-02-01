import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfiile = () => {
  const [user] = useAuthState(auth);
  const [appUser, setAppUser] = useState([]);
  useEffect(() => {
    fetch(`https://manufacturer-xvzb.onrender.com/user/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppUser(data));
  }, [user, appUser]);
  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    const currentUser = {
      email: user?.email,
      displayName: user?.displayName,
      phone: event.target.phone.value,
      location: event.target.location.value,
      education: event.target.education.value,
      linkedin: event.target.linkedin.value,
    };

    fetch(`https://manufacturer-xvzb.onrender.com/user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Updated successfully!");
        event.target.reset();
      });
  };
  return (
    <div>
      <h4 className="text-blue-700">My Profile</h4>
      <div className="border text-left p-3">
        <p className="text-xl font-bold">Name :{user?.displayName}</p>
        <p className="text-xl font-bold">Email : {user?.email}</p>
        <p className="text-xl font-bold">
          Education : {appUser?.education || "Not Provided"}
        </p>
        <p className="text-xl font-bold">
          Location : {appUser?.location || "Not Provided"}
        </p>
        <p className="text-xl font-bold">
          Phone Number : {appUser?.phone || "Not Provided"}
        </p>
        <p className="text-xl font-bold">
          LinkedIn : {appUser?.linkedin || "Not Provided"}
        </p>
      </div>
      <div>
        <h4 className="text-blue-700 font-bold">Update Profile</h4>

        <form
          onSubmit={handleUpdateProfile}
          className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        >
          <input
            type="email"
            name="email"
            disabled
            value={user?.email}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName}
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="location"
            placeholder="Loaction"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            name="education"
            placeholder="Education"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="Linkedin"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value="Submit"
            className="btn bg-blue-700 w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfiile;
