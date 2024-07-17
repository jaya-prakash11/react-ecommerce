import React, { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function ProfilePage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    console.log("insideprofile", auth);
    if (auth.accesstoken) {
      navigate("/profile/userInfo");
    }
  }, []);

  const logOut = async () => {
    setAuth({
      // user: {},
      // accesstoken: null,
      // refreshToken: null,
    });
    navigate("/");
  };

  return (
    <div className="flex  xs:flex-col md:flex-row w-full h-auto  xs:px-3 xl:px-[15px] 2xl:px-[16%] font-titleFont">
      <div className="flex flex-col xs:w-[100%] md:w-[20%]  md:min-h-[90vh] pt-9 gap-y-6">
        <p
          className="text-lg cursor-pointer"
          onClick={() => navigate("/profile/userInfo")}
        >
          Dashboard
        </p>
        <p
          className="text-lg cursor-pointer"
          onClick={() => navigate("/profile/address")}
        >
          Addresses
        </p>
        <p
          onClick={() => navigate("/wishlist")}
          className="text-lg cursor-pointer"
        >
          Wishlist
        </p>
        <p className="text-lg cursor-pointer" onClick={() => logOut()}>
          Logout
        </p>
      </div>
      <div className="flex flex-col xs:w-[100%] md:w-[80%] md:min-h-[90vh] pt-9 ]">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilePage;
