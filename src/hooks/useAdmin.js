import { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;

    if (!email) {
      setAdmin(false);
      setAdminLoading(false);
      return;
    }

    setAdminLoading(true);
    fetch(`${baseUrl}/admin/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data?.admin || false);
        setAdminLoading(false);
      })
      .catch((error) => {
        console.error("Admin check failed:", error);
        setAdmin(false);
        setAdminLoading(false);
      });
  }, [user?.email]);

  return [admin, adminLoading];
};

export default useAdmin;
