import React, { useEffect, useState } from "react";

function ButtonComponent({
  type = "basic",
  productCount = 1,
  setProductCount = () => {},
}) {
  if (type == "basic") {
    return (
      <div className="flex w-36 h-10  border border-black justify-between items-center px-4 rounded-sm">
        <p
          onClick={() =>
            setProductCount((prev) => {
              return prev == 1 ? 1 : prev - 1;
            })
          }
          className="text-2xl font-bold cursor-pointer"
        >
          -
        </p>{" "}
        <p className="text-lg  font-sans font-medium">{productCount}</p>
        <p
          onClick={() => setProductCount((prev) => prev + 1)}
          className="text-2xl font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
        <p
          onClick={() =>
            setProductCount((prev) => {
              return prev == 0 ? 0 : prev - 1;
            })
          }
          className="text-2xl font-bold cursor-pointer"
        >
          -
        </p>{" "}
        <p>{productCount}</p>{" "}
        <p
          onClick={() => setProductCount((prev) => prev + 1)}
          className="text-xl font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    );
  }
}

export default ButtonComponent;
