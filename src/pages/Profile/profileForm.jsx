import { nanoid } from "@reduxjs/toolkit";
import { Button, Card, Form, Input, InputNumber, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addAddress,
  editAddress,
  removeAddress,
} from "../../Redux/feature/user/userSlice";

function ProfileForm({
  ind = 0,
  res = {},
  type = "create",
  isOpen = false,
  setIsOpen = () => {},
}) {
  const [edited, setEdited] = useState(false);
  var [address, setNewAddress] = useState(type == "create" ? {} : res);

  useEffect(() => {
    if (type == "edit") setNewAddress(res);
  }, [res]);

  console.log("fioioio", res);
  const dispatch = useDispatch();
  const onSubmitHandel = () => {
    if (type == "create") {
      address.id = nanoid();
      dispatch(addAddress(address));
      setNewAddress({});
      setIsOpen(false);
    } else {
      dispatch(editAddress(address));
      setEdited(false);
    }
  };

  return (
    <>
      {type !== "create" && (
        <div className={`${edited && "w-full"}`}>
          <Card className="w-[256px]">
            <div className="flex flex-col w-full">
              <p>{address.firstName}</p>
              <p>{address.LastName}</p>
              <p>{address.CompanyName}</p>
            </div>
            <div className="flex w-[100%] justify-between mt-5">
              <Button
                onClick={() => {
                  if (!edited) {
                    setEdited(true);
                  } else {
                    setEdited(false);
                  }
                }}
                size="large"
                className="w-[100px] "
              >
                Edit
              </Button>
              <Button
                size="large"
                className="w-[100px]"
                onClick={() => dispatch(removeAddress(address))}
              >
                Delete{" "}
              </Button>
            </div>
          </Card>
        </div>
      )}
      {(edited || isOpen) && (
        <div className="flex flex-col w-[75%] border border-black px-7 py-7 gap-y-6 items-center mt-6">
          <div className="flex w-[100%] pl-12">
            <p>Edit Address</p>
          </div>
          <Form
            // {...formItemLayout}  phoneNumber zipcode country province City Address CompanyName Address2
            fields={[
              { name: "firstName", value: address?.firstName },
              { name: "LastName", value: address.LastName },
              { name: "CompanyName", value: address.CompanyName },
              { name: "Address", value: address.Address },
              { name: "Address2", value: address.Address2 },
              { name: "City", value: address.City },
              { name: "country", value: address.country },
              { name: "province", value: address.province },
              { name: "zipcode", value: address.zipcode },
              { name: "phoneNumber", value: address.phoneNumber },
            ]}
            variant="filled"
            style={{
              maxWidth: 600,
            }}
            onFinish={onSubmitHandel}
            className="flex flex-col w-[100%]"
          >
            <div className="flex  xs:flex-col md:flex-row md:justify-between">
              <Form.Item
                name="firstName"
                o
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    setNewAddress((prev) => {
                      return { ...prev, firstName: e.target.value };
                    })
                  }
                  size="large"
                  name="firstName"
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                name="LastName"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input
                  onChange={(e) =>
                    setNewAddress((prev) => {
                      return { ...prev, LastName: e.target.value };
                    })
                  }
                  size="large"
                  name="LastName"
                  placeholder="Last Name"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="CompanyName"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNewAddress((prev) => {
                    return { ...prev, CompanyName: e.target.value };
                  })
                }
                classNames="w-[40%]"
                size="large"
                name="CompanyName"
                placeholder="Company Name"
              />
            </Form.Item>
            <Form.Item
              name="Address"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNewAddress((prev) => {
                    return { ...prev, Address: e.target.value };
                  })
                }
                size="large"
                name="Address"
                placeholder="Address"
              />
            </Form.Item>
            <Form.Item
              name="Address2"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNewAddress((prev) => {
                    return { ...prev, Address2: e.target.value };
                  })
                }
                size="large"
                name="Address2"
                placeholder="Apartment, suit, etc"
              />
            </Form.Item>
            <Form.Item
              name="City"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNewAddress((prev) => {
                    return { ...prev, City: e.target.value };
                  })
                }
                size="large"
                name="city"
                placeholder="city"
              />
            </Form.Item>
            {/* <Form.Item
              name="province"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select size="large" name="province" placeholder="province" />
            </Form.Item>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select
                size="large"
                name="country"
                placeholder="country/region"
              />
            </Form.Item> */}
            <Form.Item
              name="zipcode"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNewAddress((prev) => {
                    return { ...prev, zipcode: e.target.value };
                  })
                }
                size="large"
                name="zip"
                placeholder="Postal Zip Code"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <InputNumber
                onChange={(value) =>
                  setNewAddress((prev) => {
                    return { ...prev, phoneNumber: value };
                  })
                }
                size="large"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button size="large" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}

export default ProfileForm;
