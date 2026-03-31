import React, { useEffect, useState } from "react";
import baseUrl from "../../api/baseUrl";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const MyProfiile = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [appUser, setAppUser] = useState({});

  // Helper function to fetch user data
  const fetchUserData = () => {
    if (!user?.email) return;
    fetch(`${baseUrl}/user/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppUser(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUserData();
  }, [user?.email]);

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

    fetch(`${baseUrl}/user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile updated successfully!");
        fetchUserData(); // Better than setAppUser(data) as response varies
        event.target.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-1">
            User Account
          </h2>
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            My Profile
          </h3>
          <p className="text-gray-500 mt-2 font-light">
            View and update your personal manufacturing account details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats/Info Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border-2 border-blue-100">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-2xl text-blue-600"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {user?.displayName || "Member"}
              </h3>
              <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider">
                {admin ? "Administrator" : "Partner"}
              </p>

              <div className="w-full text-left space-y-4 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-blue-500">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  </div>
                  <span className="text-xs font-medium truncate">
                    {user?.email}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-blue-500">
                    <FontAwesomeIcon icon={faPhone} className="text-xs" />
                  </div>
                  <span className="text-xs font-medium">
                    {appUser?.phone || "No phone"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 h-full">
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="form-control">
                    <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className="input input-bordered bg-gray-100/50 text-gray-600 cursor-not-allowed rounded-xl text-sm font-semibold border-gray-100"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={user?.displayName || ""}
                      readOnly
                      className="input input-bordered bg-gray-100/50 text-gray-600 cursor-not-allowed rounded-xl text-sm font-semibold border-gray-100"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      defaultValue={appUser?.phone}
                      placeholder="Your phone number"
                      className="input input-bordered focus:border-blue-500 rounded-xl text-sm"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={appUser?.location}
                      placeholder="City, State"
                      className="input input-bordered focus:border-blue-500 rounded-xl text-sm"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                      Education
                    </label>
                    <input
                      type="text"
                      name="education"
                      defaultValue={appUser?.education}
                      placeholder="School/University"
                      className="input input-bordered focus:border-blue-500 rounded-xl text-sm"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                      LinkedIn Handle
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      defaultValue={appUser?.linkedin}
                      placeholder="LinkedIn URL"
                      className="input input-bordered focus:border-blue-500 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-12 bg-blue-600 text-white rounded-full font-extrabold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                  >
                    Save Profile Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfiile;
