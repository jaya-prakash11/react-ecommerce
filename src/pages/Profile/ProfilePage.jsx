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
    setAuth({});
    navigate("/");
  };

  return (
    <div className="flex  xs:flex-col md:flex-row w-full h-auto  xs:px-3 xl:px-[15px] 2xl:px-[16%] font-titleFont">
      <div className="flex flex-col xs:w-[100%] md:w-[15%]  md:min-h-[90vh] pt-9 xs:pb-4 gap-y-6  sm:border-b lg:border-b-0 lg:border-r  border-black">
        <button
          className="text-lg cursor-pointer dark:md:hover:bg-black  hover:text-white focus:bg-black focus:text-white flex pl-3"
          onClick={() => navigate("/profile/userInfo")}
        >
          Dashboard
        </button>
        <button
          className="text-lg cursor-pointer dark:md:hover:bg-black  hover:text-white focus:bg-black focus:text-white flex pl-3"
          onClick={() => navigate("/profile/address")}
        >
          Addresses
        </button>
        <button
          className="text-lg cursor-pointer dark:md:hover:bg-black  hover:text-white focus:bg-black focus:text-white flex pl-3"
          onClick={() => navigate("/wishlist")}
        >
          Wishlist
        </button>
        <button
          className="text-lg cursor-pointer dark:md:hover:bg-black  hover:text-white focus:bg-black focus:text-white flex pl-3"
          onClick={() => logOut()}
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col xs:w-[100%] md:w-[80%] md:min-h-[90vh] pt-9 pl-6 ]">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilePage;
