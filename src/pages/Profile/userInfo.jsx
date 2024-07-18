import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/feature/user/userSlice";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function UserInfo() {
  const axiosprivate = useAxiosPrivate();
  const { userDetail, address } = useSelector(
    (state) => state.eShopeReducer?.user.userInfo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("UYstart");
    // let isMounted = true;
    const controller = new AbortController();
    const getuser = async () => {
      console.log("inside");
      try {
        let response = await axiosprivate.get("/profile");

        dispatch(addUser(response.data));
      } catch (err) {
        console.log("UYerr", err);
      }
      console.log("UYDone");
    };

    getuser();
  }, []);

  return (
    <div>
      {" "}
      <p>
        Hello {userDetail?.name} (not {userDetail?.name}!) Logout
      </p>
      <div className="mt-5">Order History</div>
      <div className="flex flex-col mt-3">
        <p>Account Details</p>
        <div className="flex w-full h-52 border border-black mt-9">
          <div className="flex flex-col w-[50%] gap-y-3 border-r border-black pl-2">
            <p>Name</p>
            <p>E-mail</p>
            <p>Address</p>
            <p>Address2</p>
          </div>
          <div className="flex flex-col w-[50%]  gap-y-3 pl-2">
            <p>{userDetail?.name}</p>
            <p>{userDetail?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
