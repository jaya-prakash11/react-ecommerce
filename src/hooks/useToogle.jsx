import React from "react";
import { toogleContext } from "../context/ToogleProvider";
import { useContext } from "react";

function useToogle() {
  return useContext(toogleContext);
}

export default useToogle;
