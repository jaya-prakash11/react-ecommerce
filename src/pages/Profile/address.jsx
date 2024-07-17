import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/feature/user/userSlice";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Button } from "antd";
import ProfileForm from "./profileForm";

function Address() {
  const { userDetail, address } = useSelector(
    (state) => state.eShopeReducer?.user.userInfo
  );
  const [addAddressOpen, setAddressOpen] = useState(false);

  const [addressList, setAddressList] = useState([]);
  useEffect(() => {
    setAddressList(address);
  }, [address]);
  return (
    <div>
      <Button
        onClick={() => setAddressOpen(!addAddressOpen)}
        size="large"
        className="w-[150px]"
      >
        Add New Address
      </Button>

      <ProfileForm
        {...{
          type: "create",
          isOpen: addAddressOpen,
          setIsOpen: setAddressOpen,
        }}
      ></ProfileForm>
      <div className="flex w-full flex-wrap gap-x-20 gap-y-6 mt-5">
        {addressList?.map((res, ind) => {
          return <ProfileForm {...{ res, ind, type: "edit" }} />;
        })}
      </div>
    </div>
  );
}

export default Address;
